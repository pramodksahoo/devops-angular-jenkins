# #############
#
# # base image
# FROM node:12.2.0 as build
#
# # install chrome for protractor tests
# # RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
# # RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
# # RUN apt-get update && apt-get install -yq google-chrome-stable
#
# # set working directory
# WORKDIR /app
#
# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH
#
# # install and cache app dependencies
# COPY package.json /app/package.json
# RUN npm install
#
# # add app
# COPY . /app
#
# # run tests
# # RUN ng test --watch=false
# # RUN ng e2e --port 4202
#
# # generate build
# RUN ng build -- --output-path=dist
#
# ############
# ### prod ###
# ############
#
# # base image
# FROM nginx:1.16.0-alpine
#
# #COPY nginx/angularui.conf /etc/nginx/sites-available
# COPY nginx/angularui.conf /etc/nginx/conf.d/default.conf
#
# # copy artifact build from the 'build environment'
# COPY --from=build /app/dist /usr/share/nginx/html
#
# # expose port 80
# EXPOSE 85
#
# # run nginx
# CMD ["nginx", "-g", "daemon off;"]


### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:12.2.0 as builder


COPY package.json package-lock.json ./


## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm ci && mkdir /ng-app && mv ./node_modules ./ng-app/

## Move to /ng-app (eq: cd /ng-app)
WORKDIR /ng-app


# Copy everything from host to /ng-app in the container
COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
ARG NG_ENV=production
RUN npm run ng build -- --output-path=dist


### STAGE 2: Setup ###

FROM nginx:1.13.3-alpine

## Copy our default nginx config
COPY nginx/angularui.conf /etc/nginx/sites-available

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist /usr/share/nginx/html
EXPOSE 85

CMD ["nginx", "-g", "daemon off;"]

