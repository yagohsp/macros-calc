FROM node:18.17.0-alpine

WORKDIR /macros-calc/svelte

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000
