
# :star: TaskMinder(server)

![Project Banner](https://i.ibb.co/bMs04H0n/taskminder.png)

---

## Live site :- [TaskMinder](https://todo-app-690ac.web.app/)
🚀 Overview

This is the backend server for the Task Management Application. It handles user authentication, task management, and real-time database updates. The server is built with Node.js and Express.js, using MongoDB as the database for storing task data. CORS and dotenv are used for secure API communication.

📦 Dependencies

This server project uses the following dependencies:

Express.js - Backend framework for handling API requests.

MongoDB - NoSQL database for storing tasks.

Cors - Middleware to enable CORS for API requests.

Dotenv - Environment variable management.

🛠️ Installation & Setup

Follow these steps to set up and run the backend server locally:

Clone the repository

git clone https://github.com/Rakib383/TODO-App-server

cd todo-app-server

Install dependencies

npm install

Create a .env file and configure MongoDB credentials

DB_USER=your_db_user
DB_PASS=your_db_password

Start the server

node index.js

🏗️ Technologies Used

Backend Framework: Express.js

Database: MongoDB

Security: CORS, Dotenv

🌐 API Endpoints  
Below is a list of available API endpoints:
| Method | Endpoint         | Description                      |
|--------|-----------------|----------------------------------|
| GET    | /tasks          | Get all tasks                   |
| POST   | /tasks          | Create a new task               |
| PUT    | /tasks/:id      | Update a task by ID             |
| DELETE | /tasks/:id      | Delete a task by ID             |