import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch user list from API
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
});

// Create a new user with POST request
export const createUser = createAsyncThunk('users/createUser', async (userData) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/users', userData);
    return response.data;
});

// Fetch selected user details from API
export const fetchUserById = createAsyncThunk('users/fetchUserById', async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
});

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        status: 'idle',
        userDetails: null,
    },
    reducers: {
        setUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },
        clearUserDetails: (state) => {
            state.userDetails = null; // Reset user details
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.users.push(action.payload);
            })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.userDetails = action.payload;
            });
    }
});

export const { setUserDetails, clearUserDetails } = userSlice.actions;
export default userSlice.reducer;