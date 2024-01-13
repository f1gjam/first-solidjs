FROM  node:current-alpine AS builder
WORKDIR /appbuild

# Copy the package.json and package-lock.json files to /app 
COPY package.json /appbuild
COPY package-lock.json /appbuild
COPY config-overrides.js /appbuild
COPY .babelrc /appbuild
COPY nginx /appbuild/nginx

RUN ls -la
RUN ls -la /appbuild
RUN ls -la /appbuild/
# COPY . /appbuild

# Install dependencies
RUN npm install --loglevel warn

COPY src /appbuild/src

RUN npm run build


# COPY src /appbuild/src
# COPY public /appbuild/public
# COPY config-overrides.js /appbuild/config-overrides.js



# copy index.html /appbuild/index.html
# copy README.md /appbuild/README.md



FROM nginx:alpine AS final
COPY --from=builder /appbuild/build/* /usr/share/nginx/html/
COPY --from=builder /appbuild/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]







# WORKDIR /build
# COPY apiver1 /build/apiver1
# COPY docs /build/docs
# COPY helpers /build/helpers
# COPY internallog /build/internallog
# COPY models /build/models
# COPY runtimeconfig /build/runtimeconfig
# COPY templates /build/templates
# COPY config.yaml /build
# COPY go.mod /build
# COPY go.sum /build
# COPY main.go /build

# RUN pwd
# RUN ls -la
# RUN go mod download && go build
# RUN echo "after go commands"
# RUN ls -la


# FROM alpine:3.18
# # add new user
# RUN adduser -D appuser
# USER appuser

# WORKDIR /
# COPY --from=builder /build/config.yaml ./
# COPY --from=builder /build/templates ./templates
# COPY --from=builder /build/mongoatlasautomation ./

# EXPOSE 8080

# ENTRYPOINT ["/mongoatlasautomation"]
