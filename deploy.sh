#!/bin/bash

#
# This script is executed with TravisCI (see .travis.yml file) on the server using SSH
#
# Required :
# * pm2
# * bower
# * grunt
#

cd `dirname $0`

if [ -e "package.tgz" ]; then
	echo "Extracting package.tgz ..."
	tar -xzf package.tgz
	echo "Extracted package.tgz !"
	echo "Removing package.tgz ..."
	rm package.tgz
	echo "Removed package.tgz !"
else
	echo "No package.tgz found !"
fi

# PM2
echo "Cheking PM2 ..."
if npm list -g --depth=0 | grep -q "pm2"
then
	echo "PM2 already installed."
else
	echo "Installing PM2 ..."
	npm install pm2 -g
	echo "Installed PM2 !"
fi
# Bower
echo "Cheking Bower ..."
if npm list -g --depth=0 | grep -q "bower"
then
	echo "Bower already installed."
else
	echo "Installing Bower ..."
	npm install bower -g
	echo "Installed Bower !"
fi
# Grunt-cli
echo "Cheking Grunt ..."
if npm list -g --depth=0 | grep -q "grunt-cli"
then
	echo "Grunt already installed."
else
	echo "Installing Grunt ..."
	npm install grunt-cli -g
	echo "Installed Grunt !"
fi

## TODO: Check if Ruby and Sass are installed
## sudo apt-get install ruby-full
## gem install sass

## Install dependencies
echo "Installing dependencies ..."
npm install
bower install
echo "Installed dependencies !"

echo "Building ..."
grunt build --production
echo "Building : done !"

## Run with pm2 (and Grunt via run.sh)
echo "Running PM2 ..."
pm2 startOrRestart ecosystem.json5 --env production

echo "Deployed successfully !"