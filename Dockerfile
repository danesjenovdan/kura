# build stage image
FROM node:16-alpine AS build-stage

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run deploy

# actual image
FROM nginx:alpine

# copy built files to nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html/dist
COPY --from=build-stage /app/index.html /usr/share/nginx/html/index.html

# copy assets and public folders
COPY --from=build-stage /app/assets /usr/share/nginx/html/assets
# COPY --from=build-stage /app/public /usr/share/nginx/html/public
