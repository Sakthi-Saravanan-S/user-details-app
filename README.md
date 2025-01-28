# User Details App

## Overview
The **User Details App** is a React-based web application that allows users to view, create, and manage user details. It leverages modern tools like React Router for navigation, Redux for state management, and Axios for API integration. The app is styled using Bootstrap and includes user-friendly features like spinners (via `react-spinners`) and toast notifications (via `react-toastify`).

---

## Features
- **User Management**: View, create, and manage user details.
- **State Management**: Uses Redux and Redux Toolkit for efficient state handling.
- **Routing**: Implements React Router for navigation between pages.
- **API Integration**: Axios is used for making HTTP requests.
- **Styling**: Styled using Bootstrap for a responsive and modern UI.
- **Notifications**: Displays notifications using React Toastify.
- **Loaders**: Implements spinners using React Spinners for better user experience.

---

## Technologies Used
- **React**: Frontend library for building user interfaces.
- **Redux & Redux Toolkit**: State management.
- **React Router DOM**: Client-side routing.
- **Axios**: API integration.
- **Bootstrap**: Styling.
- **React Toastify**: Toast notifications.
- **React Spinners**: Loading indicators.

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:
   ```bash
   cd user-details-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage

### Start the Development Server
```bash
npm start
```
- The app will be available at `http://localhost:3000`.

### Build for Production
```bash
npm run build
```
- This will create an optimized production build in the `build` directory.

### Run Tests
```bash
npm test
```
- Launches the test runner in interactive watch mode.

---

## Folder Structure
```plaintext
user-details-app/
├── public/           # Static files
├── src/              # Application source code
│   ├── components/   # Reusable components
│   ├── pages/        # Page components
│   ├── store/        # Redux store and slices
│   ├── App.js        # Main app component
│   ├── index.js      # Application entry point
│   └── styles/       # Custom styles
└── package.json      # Dependency and script configuration
```

---

## Dependencies

### Core Dependencies
- `react` & `react-dom`: Core React libraries.
- `react-router-dom`: Routing.
- `@reduxjs/toolkit` & `redux`: State management.
- `axios`: HTTP requests.

### UI/UX Enhancements
- `bootstrap`: CSS framework for styling.
- `react-toastify`: Toast notifications.
- `react-spinners`: Loading indicators.

### Testing Libraries
- `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`: Testing utilities.

---
