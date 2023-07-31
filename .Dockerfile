
FROM node:latest

# Create app directory
WORKDIR /app

COPY Package*.json ./

RUN npm install

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD [ "npm", "start" ]