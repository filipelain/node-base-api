FROM node:12

#MetaData
LABEL maintainer="filipe rodrigues"

# Diretorio que fica a aplicação 
WORKDIR /usr/src/app
# para executas somente se ouver alteração no packege
COPY express-admin/package*.json ./
RUN npm install
# 
COPY ./express-admin/ .


EXPOSE 3000

CMD ["node","app.js"]