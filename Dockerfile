FROM node

# set working directory
WORKDIR /

COPY . /
RUN mkdir public
COPY ../front/dist /public
COPY ../front/index.html /public

# update apt packages
ARG env
ENV APP_ENV=$env 
RUN npm install
RUN npm run build

RUN npm i -g pm2

EXPOSE 80
CMD ["pm2-runtime","ecosystem.config.js","--env","production"]
