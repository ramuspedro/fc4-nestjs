FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash git

RUN touch /home/node/.bashrc | echo "PS1='\w\$ '" >> /home/node/.bashrc

RUN npm config set cache /home/node/app/.npm-cache --global

RUN npm i -g @nestjs/cli@7.4.1

USER node

COPY category-app/ /home/node/app

EXPOSE 3000

WORKDIR /home/node/app

ENTRYPOINT [ "npm", "run", "start" ]