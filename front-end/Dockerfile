#Base Image off of Node.JS project
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# If you are building your code for production
RUN npm install

# Build app for production
RUN npm install pm2 -g
RUN npm install -g serve

# Bundle app source
COPY . .

RUN npm run build

EXPOSE 3000

CMD ["pm2-runtime", "ecosystem.config.js"]