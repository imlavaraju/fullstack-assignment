# Help Center Project

This project consists of a frontend built with React.js and a backend API using Node.js and Express.js. The backend handles Help Center card management through RESTful API endpoints, and the frontend displays the UI for users to interact with the Help Center.

## Table of Contents

- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later) or [Yarn](https://yarnpkg.com/) (v1.22 or later)

## Backend Setup

1.  clone the repository and Navigate to the backend directory:

   ```bash
   clone https://github.com/imlavaraju/fullstack-assignment.git
   cd fullstack-assignment
   cd backend
   ```



2. **Install the backend dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the `backend` directory and include the necessary environment variables. Example:

   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_uri_here
   ```

4. **Run the backend server:**

   ```bash
   npm start
   ```

   The backend server will run on `http://localhost:5000`.

## Frontend Setup

1. **Navigate to the frontend directory:**

   ```bash
   cd fullstack-assignment
   cd frontend
   ```

2. **Install the frontend dependencies:**

   ```bash
   npm install
   ```

3. **Run the frontend application:**

   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000`.

## Project Structure

### Backend

```bash
backend/
├── models/
│   └── helpcentermodel.js     # Help center model schema
├── routes/
│   └── cardRoutes.js          # API routes for managing Help Center cards
├── server.js                  # Main entry point for backend server
└── package.json               # Backend dependencies and scripts
```

### Frontend

```bash
frontend/
├── src/
│   ├── components/
│   │   ├── Header.js           # Header component
│   │   ├── Main.js             # Main content component
│   │   └── BoxesContainer.js   # Container for the Help Center cards
│   ├── App.js                  # Main App component
│   ├── App.css                 # Main CSS file
├── public/
│   └── index.html              # HTML file
└── package.json                # Frontend dependencies and scripts
```

## Technologies Used

### Backend

- **Node.js**: JavaScript runtime for the server
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing Help Center cards

### Frontend

- **React.js**: JavaScript library for building user interfaces
- **CSS**: For styling components

## Running Both Frontend and Backend Together

1. Open two terminal windows.
2. In the first terminal, navigate to the backend directory and run the backend server:

   ```bash
   cd fullstack-assignment
   cd backend
   npm start
   ```

3. In the second terminal, navigate to the frontend directory and run the frontend development server:

   ```bash
   cd fullstack-assignment
   cd frontend
   npm start
   ```
Both servers should now be running locally. The frontend can be accessed at `http://localhost:3000`, and the backend API is available at `http://localhost:5000`.

