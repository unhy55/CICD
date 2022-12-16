FROM node:12-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ENTRYPOINT [ "node", "app.js" ]
EXPOSE 3000

