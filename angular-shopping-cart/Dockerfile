##### Angular build
FROM node:latest as angular-client
LABEL author="Loiane Groner"
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build --prod

##### Nginx
FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular-client /app/dist/angular-shopping-cart /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t nginx-angular -f Dockerfile .
# docker run -p 8080:80 nginx-angular
