# etapa de compilación
FROM node:14-alpine as build-stage
WORKDIR /iHood
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# etapa de producción
FROM nginx:1.13.12-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["node", "-g", "daemon off;"]