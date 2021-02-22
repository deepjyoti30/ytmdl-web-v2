# Use latest nginx image
FROM nginx:latest

# Remove default files
RUN rm -rf /usr/share/nginx/html/*

# Copy the distributable directory
COPY ./dist/ /app

# Copy the config
COPY nginx.conf /etc/nginx/nginx.conf