import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../redux/userSlice';
import { ToastContainer, toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';
import 'react-toastify/dist/ReactToastify.css';

const CreateUser = ({ isDarkMode }) => {
    const [userData, setUserData] = useState({
        name: '',
        username: '',
        email: '',
        address: {
            street: '',
            city: '',
            zipcode: '',
        },
        phone: '',
        website: '',
        company: {
            name: '',
        }
    });

    const [loading, setLoading] = useState(false); // Manage loading spinner

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Show spinner during API call

        try {
            await dispatch(createUser(userData));
            toast.success('Data saved successfully');
            setTimeout(() => {
                navigate('/users');
            }, 3000);
        } catch (error) {
            toast.error('Data could not be saved, please try again');
        } finally {
            setLoading(false); // Hide spinner
        }
    };

    return (
        <div className={isDarkMode ? 'bg-dark text-light create-user-container' : 'bg-light text-dark create-user-container'}>
            <form onSubmit={handleSubmit} className={isDarkMode ? 'card p-4 bg-dark text-light' : 'card p-4 bg-light text-dark'}>
                <div className="form-group">
                    <input name="name" className={isDarkMode ? 'form-control bg-dark text-light' : 'form-control bg-light text-dark'} placeholder="Name" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input name="username" className={isDarkMode ? 'form-control bg-dark text-light' : 'form-control bg-light text-dark'} placeholder="Username" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input name="email" className={isDarkMode ? 'form-control bg-dark text-light' : 'form-control bg-light text-dark'} placeholder="Email" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input name="street" className={isDarkMode ? 'form-control bg-dark text-light' : 'form-control bg-light text-dark'} placeholder="Street" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input name="city" className={isDarkMode ? 'form-control bg-dark text-light' : 'form-control bg-light text-dark'} placeholder="City" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input name="zipcode" className={isDarkMode ? 'form-control bg-dark text-light' : 'form-control bg-light text-dark'} placeholder="Zip Code" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input name="phone" className={isDarkMode ? 'form-control bg-dark text-light' : 'form-control bg-light text-dark'} placeholder="Phone" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input name="website" className={isDarkMode ? 'form-control bg-dark text-light' : 'form-control bg-light text-dark'} placeholder="Website" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input name="company" className={isDarkMode ? 'form-control bg-dark text-light' : 'form-control bg-light text-dark'} placeholder="Company Name" onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                    {loading ? <ClipLoader color="#ffffff" size={25} /> : 'Create User'}
                </button>
            </form>

            <ToastContainer position="bottom-right" autoClose={3000} />
        </div>
    );
};

export default CreateUser;
