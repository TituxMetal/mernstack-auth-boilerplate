FROM node:10.13-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 5000

ENV mongoUri mongodb://mongo:27017/mernAuth

CMD ["yarn", "start"]
