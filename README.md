# WTWR (What to Wear?): Back End
This repository houses the back-end server for the WTWR (What to Wear) application. It serves as the backbone of the application, handling various tasks such as user authentication, data storage, and API endpoints.

## Project Overview
Throughout this project, I've focused on setting up a reliable Express server and configuring it to interact with a MongoDB database. Here's a brief overview of what I've accomplished:

- **Express Setup**: Initialize an Express project to handle HTTP requests and responses effectively.
- **Database Configuration**: Create and connect to a MongoDB database to store application data securely.
- **Route and Controller Implementation**: Define routes and controllers to handle various API endpoints for users and clothing items.
- **Error Handling**: Implement error handling mechanisms to gracefully manage unexpected errors and invalid requests.
- **Authorization Setup**: Implement temporary authorization solutions to secure access to sensitive resources.

## Key Features
As I progressed through the project, I implemented several key features to enhance the functionality of the server:

- **RESTful API**: Define RESTful API endpoints for users and clothing items, enabling seamless communication with the client-side application.
- **User Authentication**: Implement user authentication mechanisms such as JWT-based token authentication to secure access to user-specific resources.
- **Database Integration**: Integrate with MongoDB using Mongoose to perform CRUD operations on user and clothing item data.
- **Error Management**: Implement error handling middleware to provide informative error messages and appropriate HTTP status codes.
- **Like/Dislike Functionality**: Implement routes and controllers to allow users to like or dislike clothing items, updating the likes array accordingly.


## Technologies
- **Express.js**: Used as the server framework for handling HTTP requests and responses.
- **MongoDB, Mongoose**: Leveraged for database storage and interaction, ensuring efficient data management.
- **REST API, Postman Testing**: Designed and tested RESTful API endpoints using Postman, ensuring robust and reliable communication between the server and client.
- **npm**: Utilized for package management and dependency installation, streamlining project setup and management.

## Running the Project
`npm run start` — to launch the server 

`npm run dev` — to launch the server with the hot reload feature
