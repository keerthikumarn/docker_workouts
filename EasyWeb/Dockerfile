#Base image
FROM node:alpine

#Installing required dependencies

WORKDIR /usr/app
COPY ./package.json ./
RUN npm install
COPY ./ ./

#Set up a default command
CMD ["npm", "start"]


