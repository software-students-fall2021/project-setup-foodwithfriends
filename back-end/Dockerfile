#Base Image off of Node.JS project
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production

# Install pm2
RUN npm install pm2 -g

# Bundle app source
COPY . .

EXPOSE 8000
CMD [ "pm2-runtime", "app.js" ]