FROM node:alpine

RUN mkdir -p /usr/backend/src/node-app && chown -R node:node /usr/backend/src/node-app

WORKDIR /usr/backend/src/node-app

COPY package.json yarn.lock ./

USER node

RUN yarn install --pure-lockfile

COPY --chown=node:node . .

EXPOSE 3000
