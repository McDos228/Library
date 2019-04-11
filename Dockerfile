FROM node:10
RUN mkdir /lib
ADD ./ /lib
WORKDIR /lib
RUN npm i
EXPOSE 80
CMD ["npm", "start"]