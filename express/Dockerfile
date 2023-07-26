FROM node:18.17.0-alpine

WORKDIR /macros-calc/express

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8080