import {
    FETCH_JOBS_REQUEST,
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_FAILURE,
    ADD_JOB_SUCCESS,
} from '../types/jobTypes';
import axiosInstance from '../../api/axiosInstance';

export const fetchJobs = () => async (dispatch) => {
    dispatch({ type: FETCH_JOBS_REQUEST });

    try {
        const response = await axiosInstance.get('/get/jobs');
        console.log('Fetched Jobs:', response.data);
        dispatch({
            type: FETCH_JOBS_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        console.error('Error fetching jobs:', error.response || error.message);
        dispatch({
            type: FETCH_JOBS_FAILURE,
            payload: error.response?.data?.message || 'Failed to fetch jobs',
        });
    }
};

export const addJob = (jobData) => async (dispatch) => {
    try {
        const response = await axiosInstance.post('/create/job', jobData);
        console.log('Job Added:', response.data);
        dispatch({
            type: ADD_JOB_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        console.error('Error adding job:', error.response || error.message);
    }
};
