workflow "Deployment" {
  on = "push"
  resolves = ["maddox/actions/ssh@master"]
}

action "Build image" {
  uses = "actions/docker/cli@76ff57a"
  args = "build -t ilshidur/nicolas-coutin.fr ."
}

action "Log into registry" {
  uses = "actions/docker/login@76ff57a"
  secrets = ["DOCKER_USERNAME", "DOCKER_PASSWORD"]
  needs = ["Build image"]
}

action "Push to registry" {
  uses = "actions/docker/cli@76ff57a"
  needs = ["Log into registry"]
  args = "push ilshidur/nicolas-coutin.fr"
}

action "maddox/actions/ssh@master" {
  uses = "maddox/actions/ssh@master"
  needs = ["Push to registry"]
  secrets = ["PRIVATE_KEY", "PUBLIC_KEY", "USER", "HOST"]
  args = "./deploy.sh"
}
