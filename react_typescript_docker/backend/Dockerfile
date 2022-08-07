FROM node:17-alpine

RUN npm install -g nodemon

WORKDIR /backend

COPY package.json .

RUN yarn

COPY . .

EXPOSE 4000
# required for docker desktop port mapping

CMD ["yarn", "start"]