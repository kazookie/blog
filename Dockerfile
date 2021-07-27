FROM alpine

# upgrade packages
RUN apk update && apk upgrade

# install Hugo
RUN apk add hugo

WORKDIR /webapp
