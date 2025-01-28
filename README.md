# User Management App

## Overview

The **User Management App** is a React-based web application for managing users. It allows users to:
1. View a list of users fetched from an API.
2. View detailed information about a specific user.
3. Create new users via a form and save the data to an API.

The app uses **Redux** for state management, **Bootstrap** for styling, and supports both **light** and **dark modes** with a toggle. The app also implements features such as form autofill support, loading spinners, and toast notifications.

### Features
- **User List Page**: Displays a list of users with search functionality.
- **User Detail Page**: Displays detailed information about a user.
- **Create User Page**: Allows users to create new user entries through a form.
- **Dark/Light Mode**: Users can toggle between light and dark modes.
- **Loading Spinner**: Displays a loading spinner while API calls are in progress.
- **Toast Notifications**: Shows success or error notifications on API call completion.
- **Responsive Design**: Optimized for different screen sizes using Bootstrap.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Redux**: State management library for handling global state.
- **Redux Toolkit**: Simplified configuration for Redux.
- **React Router**: Declarative routing for React applications.
- **Bootstrap**: CSS framework for responsive and modern web design.
- **JSONPlaceholder API**: Mock API used for user data (https://jsonplaceholder.typicode.com/users).
- **React Toastify**: Third-party library for toast notifications.
- **React Spinners**: Third-party library for showing loading spinners.

## Installation

1. Clone this repository:
    git clone https://github.com/Sakthi-Saravanan-S/user-details-app.git

2. Navigate to the project directory:
    cd user-details-app

3. Install the required dependencies:
    npm install

4. Start the development server:
    npm start

5. Open the application in your browser:
    http://localhost:3000/
