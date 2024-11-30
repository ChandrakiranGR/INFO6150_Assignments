import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import authReducer from './reducers/authReducer'
import userReducer from './reducers/userReducer';
import jobReducer from './reducers/jobReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    users: userReducer,
    jobs: jobReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
