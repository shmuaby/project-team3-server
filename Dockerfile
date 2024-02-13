FROM node:18

WORKDIR /src/

COPY . packge*.json ./

RUN npm i

COPY ./src .

ENV PORT=8181

EXPOSE 8181

CMD [ "npm", "run","dev" ]
