FROM node:current-alpine AS base
RUN mkdir -p /home/node/app
RUN chown -R node:node /home/node && chmod -R 770 /home/node
WORKDIR /home/node/app

FROM base AS builder-server
WORKDIR /home/node/app
#RUN apk add --no-cache --virtual .build-deps git make python g++
COPY --chown=node:node ./package.json /home/node/app/package.json
COPY --chown=node:node ./package-lock.json /home/node/app/package-lock.json
USER node
RUN npm install --loglevel warn --production

FROM base AS production
WORKDIR /home/node/app
USER node
COPY --chown=node:node --from=builder-server /home/node/app/build ./build
COPY --chown=node:node ./package.json /home/node/app/package.json
COPY --chown=node:node ./package-lock.json /home/node/app/package-lock.json
#COPY --chown=node:node ./assets ./assets
#COPY --chown=node:node ./bin ./bin
#COPY --chown=node:node ./src ./src
EXPOSE 3000
CMD ["npm", "start"]



# FROM  node:current-alpine AS builder
# WORKDIR /appbuild

# # Copy the package.json and package-lock.json files to /app 
# COPY package*.json /appbuild

# # Install dependencies
# RUN npm install

# COPY src /appbuild/src
# COPY public /appbuild/public

# RUN npm run build

# copy index.html /appbuild/index.html
# copy README.md /appbuild/README.md



# FROM node:current-alpine AS final
# WORKDIR /app
# COPY --from=builder ./appbuild/build ./
# COPY package*.json ./

# RUN npm install --production
# CMD [ "yarn", "start" ]


# # Create app directory
# WORKDIR /app

# # Copy the package.json and package-lock.json files to /app 
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code to /app
# COPY . /app

# # Expose port 8002
# Expose 8002

# # Start the server
# CMD ["npm","start"]




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
