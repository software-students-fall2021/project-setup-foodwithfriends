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

Install main repository dependencies

```
npm install
```

Install frontend dependencies

```
cd front-end && npm install
```

Install backend dependencies

```
cd back-end && npm install
```

## 4. Add environment variables

Please look at the #team-oita slack channel or ask Jen for the files.

Add .env file to backend directory (example)

```
DB_CONNECTION=VALUE
DOCUMENU_KEY=VALUE
```

Add .env file to frontend directory (example)

```
REACT_APP_API_SERVER=http://localhost:8000
REACT_APP_GOOGLE_KEY=VALUE
ESLINT_NO_DEV_ERRORS=true
```

## 5. Run the project

In the repository source directory, you can run both projects concurrently with this command

```
npm run dev
```

## 6. Using ESLint

ESLint is a great tool that helps identify syntax errors in your code and help fix them.

To lint your code:

```
npm run lint
```

If you want to disable linting errors on the browser (to prevent compilation errors):

```
export ESLINT_NO_DEV_ERRORS=true
```

While not required, it is recommended to use prettier to format the files.
Check out the prettier extension [here](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to install.

### 7. Running tests

To run unit tests on the backend

```
npm run test
```

To check code coverage

```
npm run coverage
```

### 8. Docker Deployment

If you prefer to use docker for development, you can use the following commands to deploy the project to your local machine.
Please note that you will need to have docker installed on your machine.
Make sure that Docker is running on your machine before typing the commands below.

To run the backend container:
(Exposed on localhost:8000)
```
docker build . -t <your username>/food-with-friends-back-end
docker run -p 8000:8000 -d <your username>/food-with-friends-back-end
```

To run the frontend container:
(Exposed on localhost:3000)
```
docker build . -t <your username>/food-with-friends-front-end
docker run -p 3000:3000 -d <your username>/food-with-friends-front-end
```

If you have successfully deployed the backend and frontend containers,
you can now view and access the backend and frontend containers from your local machine.

To go inside the container:
docker exec -it <container id> bash

To stop the container:
docker kill <container id>

For more information, please see: 
https://docs.docker.com/engine/reference/commandline/docker/
