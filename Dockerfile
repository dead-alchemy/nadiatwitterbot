FROM node:16
WORKDIR /api
COPY package.json .

RUN ["yarn", "install"]

COPY . .

EXPOSE 8080:8080

CMD ["yarn", "start"]