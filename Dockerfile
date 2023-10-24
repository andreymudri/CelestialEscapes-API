
   # Use the official Node.js image as the base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the rest of the application code
COPY . .

# Install dependencies
RUN npm install


# Expose the port that your application runs on
EXPOSE 80

# Command to run your application
CMD ["npm", "run", "dev"]