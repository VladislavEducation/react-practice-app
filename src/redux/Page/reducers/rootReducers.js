import {combineReducers} from 'redux';
import basketReducer from './basket'

export default combineReducers({
    basketSum: basketReducer,

})