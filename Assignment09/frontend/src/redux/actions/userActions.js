import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
} from '../types/userTypes';
import axiosInstance from '../../api/axiosInstance';

export const fetchUsers = () => async (dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });

    try {
        const response = await axiosInstance.get('/users');
        dispatch({
            type: FETCH_USERS_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_USERS_FAILURE,
            payload: error.response?.data?.message || 'Failed to fetch users',
        });
    }
};
