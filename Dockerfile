FROM node:23-alpine
WORKDIR .
COPY ./package.json  ./
RUN npm install
COPY ./ ./
CMD ["npm","run","dev"]


