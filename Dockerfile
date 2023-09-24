# Use an Nginx image
FROM nginx:alpine

# Copy the 'dist' folder to the Nginx HTML folder
COPY dist/ /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]