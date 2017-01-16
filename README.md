# jasmine-karma-for-angular
 Node and Jasmine  Karma for AngularJS Testing

# What is Jasmine?
Jasmine is an automated testing framework for JavaScript.

# What is karma?
Karma is a direct product of the AngularJS team from struggling to test their own framework features with existing tools.


# install NVM
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash
nvm install 5.0
echo "5.0" > .nvmrc
nvm use 5.0
npm install -g nodemon

# create proyect tree
touch server.js
mkdir app && cd app
touch index.html app.js app.css

# lets create package json config file
npm init

# install some packages required for this app
npm install express body-parser morgan path --save

# configure and add your html elements, etc.

# Karma Jasmine Setup
npm install karma karma-jasmine jasmine-core karma-chrome-launcher --save-dev
npm install -g karma-cli

# Install dependencies angular  
npm install angular angular-ui-router angular-mocks --save-dev

# run karma configurator and complete the wizard
karma init

# create and run your tests

# tips:
cli cute output install: npm install karma-spec-reporter --save-dev
