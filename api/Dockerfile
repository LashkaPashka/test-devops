FROM node:alpine

WORKDIR /app

EXPOSE 3000

COPY ./api/package.json ./api/package-lock.json ./

RUN npm ci && npm cache clean --force

COPY ./api/ ./

CMD ["npm", "start"]
