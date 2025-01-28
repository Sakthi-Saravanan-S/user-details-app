import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './pages/UserList';
import UserDetails from './pages/UserDetails';
import CreateUser from './pages/CreateUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <Router>
            <div className={isDarkMode ? 'bg-dark text-light min-vh-100' : 'bg-light text-dark min-vh-100'}>
                <div className="container py-5">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h1>User Management App</h1>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="themeSwitch"
                                checked={isDarkMode}
                                onChange={toggleTheme}
                            />
                            <label className="form-check-label" htmlFor="themeSwitch">
                                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                            </label>
                        </div>
                    </div>
                    <Routes>
                        <Route path="/users" element={<UserList isDarkMode={isDarkMode} />} />
                        <Route path="/user/:id" element={<UserDetails isDarkMode={isDarkMode} />} />
                        <Route path="/create-user" element={<CreateUser isDarkMode={isDarkMode} />} />
                        <Route path="*" element={<UserList isDarkMode={isDarkMode} />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
