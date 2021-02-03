import { combineReducers } from 'redux';
import authReducer from './authentication/reducers';

const rootReducer = {
    auth: authReducer,
}

export default combineReducers(rootReducer);