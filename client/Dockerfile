FROM node:alpine3.20 AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY ./ ./

FROM node:alpine3.20

WORKDIR /app

COPY --from=build /app /app

CMD ["npm", "run", "dev"]
