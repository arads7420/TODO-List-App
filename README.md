# TODO List App
An application that allows you to create and manage your TODO list.

## Tech Stack
- Node.js for API
- MongoDB for database
- React with Redux for frontend

## Installation and Setup
- Clone the Repository:
```
mkdir TODOApp
cd TODOApp
git clone https://github.com/arads7420/TODO-List-App.git
```
- Create `backend/.env` and specify a PORT, your MongoDB Atlas URI, NODE_ENV (production/developement) and JWT_SECRET
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.2e2ed.mongodb.net/<database_name>?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development
JWT_SECRET=<your_JWT_secret>
```

- Start the Server:
```
cd TODOApp
npm install
npm run server
```

- Start the Frontend Server:
```
cd TODOApp/frontend
npm install
npm start
```
## Features:
- User Authentication with JWT Token (Login/Register)
- Add a new task
- Specifiy a color
- Specify a deadline in terms of date and time
- Specify a place
- Specify the type for a task (Basic/Urgent/Important)
- Update a task
- Search for a task 
- Delete a task

## View the App

Launch: https://todoappauthintern.herokuapp.com/

## Screenshots
- Dashboard
![image](https://user-images.githubusercontent.com/55148309/177177080-a7536251-7291-4307-9070-00a6bfa7e8ba.png)
- Add Task Form
![image](https://user-images.githubusercontent.com/55148309/177177225-82c68d36-6799-4c36-af38-b3343f7323cd.png)
- Update a Task Form
![image](https://user-images.githubusercontent.com/55148309/177177293-dab203d2-48e7-40fb-a6be-18fa0d4f8c8a.png)



