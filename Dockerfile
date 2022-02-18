# BUILD REACT APP
FROM node:16-alpine3.14 AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "npm", "start"]
