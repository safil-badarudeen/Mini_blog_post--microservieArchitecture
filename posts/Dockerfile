#base image

FROM node:14-alpine 

WORKDIR /app

#copying items to be saved as cached

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm","start"]