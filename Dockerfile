FROM  node:current-alpine3.19 AS builder
WORKDIR /build

# Copy the package.json and package-lock.json files to /app 
COPY package*.json /build

# Install dependencies
RUN npm install





COPY src /build/src
COPY public /build/public
copy index.html /build/index.html
copy README.md /build/README.md






# Create app directory
WORKDIR /app

# Copy the package.json and package-lock.json files to /app 
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to /app
COPY . /app

# Expose port 8002
Expose 8002

# Start the server
CMD ["npm","start"]




WORKDIR /build
COPY apiver1 /build/apiver1
COPY docs /build/docs
COPY helpers /build/helpers
COPY internallog /build/internallog
COPY models /build/models
COPY runtimeconfig /build/runtimeconfig
COPY templates /build/templates
COPY config.yaml /build
COPY go.mod /build
COPY go.sum /build
COPY main.go /build

RUN pwd
RUN ls -la
RUN go mod download && go build
RUN echo "after go commands"
RUN ls -la


FROM alpine:3.18
# add new user
RUN adduser -D appuser
USER appuser

WORKDIR /
COPY --from=builder /build/config.yaml ./
COPY --from=builder /build/templates ./templates
COPY --from=builder /build/mongoatlasautomation ./

EXPOSE 8080

ENTRYPOINT ["/mongoatlasautomation"]
