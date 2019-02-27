workflow "Deployment" {
  on = "push"
  resolves = [
    "On branch 'master'",
    "Slack notif. pending",
    "Slack notif. done",
    "Wait for HTTP 200 (1m)",
  ]
}

action "On branch 'master'" {
  uses = "actions/bin/filter@e96fd9a"
  args = "branch master"
}

action "Build image" {
  uses = "actions/docker/cli@76ff57a"
  args = "build -t ilshidur/nicolas-coutin.com ."
  needs = ["On branch 'master'"]
}

action "Log into registry" {
  uses = "actions/docker/login@76ff57a"
  needs = ["On branch 'master'"]
  secrets = ["DOCKER_USERNAME", "DOCKER_PASSWORD"]
}

action "Push to registry" {
  uses = "actions/docker/cli@76ff57a"
  needs = ["Tag image", "Log into registry"]
  args = "push ilshidur/nicolas-coutin.com"
}

action "Deploy" {
  uses = "maddox/actions/ssh@75d2243"
  needs = ["Push to registry"]
  secrets = [
    "PRIVATE_KEY",
    "PUBLIC_KEY",
    "HOST",
    "USER",
  ]
  args = "./deploy.sh"
}

action "Slack notif. pending" {
  uses = "Ilshidur/action-slack@master"
  needs = ["Push to registry"]
  secrets = ["SLACK_WEBHOOK"]
  args = "Deploying : https://nicolas-coutin.com"
}

action "Wait for HTTP 200 (1m)" {
  uses = "maddox/actions/wait-for-200@b21dcdc"
  needs = ["Deploy"]
  env = {
    URL = "https://nicolas-coutin.com"
    SECONDS_BETWEEN_CHECKS = "10"
    MAX_TRIES = "6"
  }
}

action "Slack notif. done" {
  uses = "Ilshidur/action-slack@master"
  needs = ["Wait for HTTP 200 (1m)"]
  secrets = ["SLACK_WEBHOOK"]
  args = "Successful deploy : https://nicolas-coutin.com"
}

action "Tag image" {
  uses = "actions/docker/tag@8cdf801"
  needs = [
    "Build image",
  ]
  args = "ilshidur/nicolas-coutin.com ilshidur/nicolas-coutin.com"
}
