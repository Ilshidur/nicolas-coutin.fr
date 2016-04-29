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
if sudo npm list -g | grep -q "pm2"
then
	echo "PM2 already installed."
else
	echo "Installing PM2 ..."
	sudo npm install pm2 -g
	echo "Installed PM2 !"
fi
# Bower
echo "Cheking Bower ..."
if sudo npm list -g | grep -q "bower"
then
	echo "Bower already installed."
else
	echo "Installing Bower ..."
	sudo npm install bower -g
	echo "Installed Bower !"
fi
# Grunt-cli
echo "Cheking Grunt ..."
if sudo npm list -g | grep -q "grunt-cli"
then
	echo "Grunt already installed."
else
	echo "Installing Grunt ..."
	sudo npm install grunt-cli -g
	echo "Installed Grunt !"
fi

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