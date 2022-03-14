FROM node

WORKDIR /code
COPY package.json /code/
RUN npm install
EXPOSE 3000
CMD ["npm start"]
COPY . /code/