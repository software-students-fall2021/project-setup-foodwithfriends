# Installation + Setup Guide

To have the application working on your local machine, use the following instructions to help you get started.

## 1. Clone the repository
```
cd <desired_directory>
git clone https://github.com/software-students-fall2021/project-setup-foodwithfriends.git
cd project-setup-foodwithfriends
```

## 2. Install Node.JS and NPM
Check out npm's docs [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to learn how to get both!

## 3. Install Project Dependencies
```
cd front-end && npm install
```

## 4. Run the project
```
npm start
```

## 5. Using ESLint

ESLint is a great tool that helps identify syntax errors in your code and help fix them.

To lint your code: 
```
npm run lint
```

If you want to disable linting errors on the browser (to prevent compilation errors): 
```
export ESLINT_NO_DEV_ERRORS=true
```
