# create image off Node 6 image

FROM node:6

# create directory for the app 
RUN mkdir -p /usr/src/app

# change directory so that commands run inside the new dir
WORKDIR /usr/src/app

# install dependencies
RUN npm install 

# Get all the code to run app 
COPY . /usr/src/app

# Expose the port 
EXPOSE 3000

# serve the app
CMD ["npm", "start"]
