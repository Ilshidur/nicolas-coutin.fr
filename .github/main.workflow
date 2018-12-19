workflow "Deployment" {
  on = "push"
  resolves = [
    "On branch 'master'",
    "Deploy",
    "Slack notification",
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
  needs = ["Build image"]
  secrets = ["DOCKER_USERNAME", "DOCKER_PASSWORD"]
}

action "Push to registry" {
  uses = "actions/docker/cli@76ff57a"
  needs = ["Log into registry"]
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

action "Slack notification" {
  uses = "Ilshidur/actions/slack@master"
  needs = ["Deploy"]
  needs = ["Deploy"]
  secrets = ["SLACK_WEBHOOK"]
  args = "A new commit has been pushed to Ilshidur/actions."
}
