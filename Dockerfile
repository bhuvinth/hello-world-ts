FROM node:14.18.2-alpine

# Create app directory
WORKDIR /usr/src

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8000

CMD ["node","dist/index.js"]