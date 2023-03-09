FROM node:18.12.1-bullseye-slim as build

WORKDIR /usr/simplebackend

ENV NODE_VERSION 18.12.1

COPY package*.json ./

COPY . ./

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
