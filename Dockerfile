FROM node:10-alpine

WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install && \
    npm install nodemon -g

COPY . .

EXPOSE 3000
CMD [ "nodemon", "./bin/www" ]