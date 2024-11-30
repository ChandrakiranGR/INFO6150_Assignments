import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../types/authTypes';

export const login = (email, password) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:3000/api/login', { email, password });
        const { type } = response.data;

        dispatch({
            type: LOGIN_SUCCESS,
            payload: type,
        });

        localStorage.setItem('userType', type);
    } catch (error) {
        console.error('Login error:', error.response?.data || error.message);
        dispatch({
            type: LOGIN_FAILURE,
            payload: error.response?.data?.message || 'Login failed',
        });
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem('userType');
    dispatch({ type: LOGOUT });
};
