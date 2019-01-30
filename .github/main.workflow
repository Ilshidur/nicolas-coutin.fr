workflow "Deployment" {
  on = "push"
  resolves = [
    "On branch 'master'",
    "Slack notification",
    "Wait for HTTP 200 (1m)",
  ]
}

action "On branch 'master'" {
  uses = "actions/bin/filter@e96fd9a"
  args = "branch master"
}

action "Build image" {
  uses = "actions/docker/cli@76ff57a"
  args = "build -t ilshidur/nicolas-coutin.fr ."
  needs = ["On branch 'master'"]
}

action "Log into registry" {
  uses = "actions/docker/login@76ff57a"
  needs = ["On branch 'master'"]
  secrets = ["DOCKER_USERNAME", "DOCKER_PASSWORD"]
}

action "Push to registry" {
  uses = "actions/docker/cli@76ff57a"
  needs = ["Build image", "Log into registry"]
  args = "push ilshidur/nicolas-coutin.fr"
}

action "Deploy" {
  uses = "maddox/actions/ssh@75d2243"
  needs = ["Push to registry"]
  secrets = [
    "HOST",
    "USER",
    "PRIVATE_KEY",
    "PUBLIC_KEY",
  ]
  args = "./deploy.sh"
}

action "Wait for HTTP 200 (1m)" {
  uses = "maddox/actions/wait-for-200@b21dcdc"
  needs = ["Deploy"]
  env = {
    URL = "https://nicolas-coutin.fr"
    SECONDS_BETWEEN_CHECKS = "10"
    MAX_TRIES = "6"
  }
}

action "Slack notification" {
  uses = "Ilshidur/action-slack@master"
  needs = ["Wait for HTTP 200 (1m)"]
  secrets = ["SLACK_WEBHOOK"]
  args = "Successful deploy : https://nicolas-coutin.fr"
}
