import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../types/authTypes';

const initialState = {
    userType: null,
    isAuthenticated: false,
    error: null,
};

const authReducer = (state = initialState, action) => {
    console.log('Reducer action:', action);

    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                userType: action.payload,
                isAuthenticated: true,
                error: null,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                isAuthenticated: false,
            };
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
};

export default authReducer;
