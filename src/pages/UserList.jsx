import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/userSlice';
import { Link } from 'react-router-dom';

const UserList = ({ isDarkMode }) => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}>
            <div className="row mb-3">
                <div className="col-md-9 col-sm-8">
                    <input
                        type="text"
                        className={isDarkMode ? 'form-control bg-dark text-light' : 'form-control bg-light text-dark'}
                        placeholder="Search by name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="col-md-3 col-sm-4 d-flex justify-content-end">
                    <Link to="/create-user" className="btn btn-primary w-100">
                        Create User
                    </Link>
                </div>
            </div>
            <ul className={isDarkMode ? 'list-group bg-dark text-light' : 'list-group bg-light text-dark'}>
                {filteredUsers.map((user) => (
                    <li key={user.id} className={isDarkMode ? 'list-group-item bg-dark text-light' : 'list-group-item bg-light text-dark'}>
                        <Link to={`/user/${user.id}`} className={isDarkMode ? 'text-light' : 'text-dark'}>
                            {user.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
