FROM node:18.16.0


RUN apt-get update 
RUN apt-get install -y libreoffice
RUN mkdir -p /opt/libreoffice7.0/program # SE HACE PORQUE NO SE ENCUENTRA EL EJECUTABLE DE LO EN EL PATH POR DEFECTO DE DOCKER 
RUN ln -s /usr/bin/soffice /opt/libreoffice7.0/program/soffice.bin # sE HACE PARAQUE QUE CARBONE IO PUEDA ENCONTRAR EL EJECUTABLE DE LO EN EL PATH POR DEFECTO DE DOCKER

RUN ln -sf /usr/share/zoneinfo/America/El_Salvador /etc/localtime

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -E

COPY . .

RUN npm install -g prisma
RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]