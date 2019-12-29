//combine all the state together,
//we break the codes in to individual parts beacause 
//if they are in one file itwill be so messy

import {combineReducers} from 'redux' ;

import userReducer from './user/user.reducer';


export default combineReducers({
    user : userReducer 
});