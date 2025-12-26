# Build stage
FROM node:18-alpine AS builder

# Build arguments for metadata and configuration
ARG BUILD_DATE=""
ARG VCS_REF=""
ARG REACT_APP_API_URL=https://www.unixcraft.dev

# Set environment variables
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install all dependencies (including devDependencies needed for build)
RUN npm ci --silent

# Copy configuration files
COPY config-overrides.js .babelrc tsconfig.json ./

# Copy nginx configuration
COPY nginx ./nginx

# Copy all source files
COPY public ./public
COPY src ./src

# Build the application
RUN npm run build

# Production stage
FROM nginx:1.25-alpine AS final

# Build arguments for labels
ARG BUILD_DATE=""
ARG VCS_REF=""

# Metadata labels
LABEL maintainer="support@unixcraft.dev"
LABEL org.opencontainers.image.created="${BUILD_DATE}"
LABEL org.opencontainers.image.revision="${VCS_REF}"
LABEL org.opencontainers.image.title="Strava Club Stats Frontend"
LABEL org.opencontainers.image.description="React frontend for Strava Club Stats leaderboard"
LABEL org.opencontainers.image.version="2.0-beta"

# Create non-root user
RUN addgroup -g 1001 -S appuser && \
    adduser -u 1001 -S appuser -G appuser

# Copy built files from builder
COPY --from=builder --chown=appuser:appuser /app/build /usr/share/nginx/html

# Copy nginx configuration
COPY --from=builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
RUN chown -R appuser:appuser /usr/share/nginx/html && \
    chown appuser:appuser /etc/nginx/conf.d/default.conf

# Create nginx cache and pid directories with correct permissions
RUN mkdir -p /var/cache/nginx /var/run && \
    chown -R appuser:appuser /var/cache/nginx /var/run

# Remove unnecessary files
RUN rm -rf /usr/share/nginx/html/*.map

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:3000/ || exit 1

# Switch to non-root user
USER appuser

# Expose port
EXPOSE 3000

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
