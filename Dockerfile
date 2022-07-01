FROM node:16.15.1-alpine as builder
RUN apk add git openssh

# NEEDED FOR NODE-CANVAS which is a dependency of trianglify
# RUN apk --no-cache add --virtual native-deps build-base g++ gcc libgcc libstdc++ linux-headers make pkgconfig  pixman-dev  cairo-dev jpeg-dev pango-dev giflib-dev

COPY ./ /js/
WORKDIR /js
RUN npm install
# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /js/node_modules/.bin:$PATH
RUN npm install
# RUN ls node_modules
# RUN ls node_modules/@hackerogame/vue-window/
# RUN cat node_modules/@hackerogame/vue-window/package.json
RUN npm run build

FROM nginx
COPY --from=builder /js/dist/ /usr/share/nginx/html
COPY --from=builder /js/default.conf /etc/nginx/conf.d/default.conf