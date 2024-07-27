# Use an official Node runtime as a parent image
FROM node:20.10.0

# Install dependencies globally
RUN npm install -g nodemon

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies with legacy-peer-deps flag
RUN npm install --legacy-peer-deps

# Rebuild bcrypt to avoid ELF header errors
RUN npm rebuild bcrypt --build-from-source

# Copy the rest of the application
COPY . .

# Expose port
EXPOSE 5000

# Start the application
CMD ["nodemon", "server.js"]
