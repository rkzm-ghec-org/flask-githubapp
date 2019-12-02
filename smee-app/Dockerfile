FROM node:alpine

ADD app.js .
ADD package.json .
ADD package-lock.json .

RUN npm install

CMD ["node", "app.js"]