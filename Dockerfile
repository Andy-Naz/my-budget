FROM node:18-alpine as client
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client /app/client
RUN npm run build

FROM node:18-alpine as server
WORKDIR /app
COPY server/package*.json ./
RUN npm install
COPY server /app
COPY --from=client /app/client/dist ./client/
EXPOSE 4000
CMD [ "npm", "start" ]