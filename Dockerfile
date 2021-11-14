FROM node:14

MAINTAINER Van-Duyet Le <me@duyetdev.com>

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install NPM
COPY package*.json  ./
RUN npm install

# Bundle app source
COPY . /usr/src/app


EXPOSE 3000

CMD ["npm","start"]