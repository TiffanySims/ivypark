import { combineReducers } from "redux";
import products from './shop_reducer';
import active from './active_reducer';

const rootReducer = combineReducers({
 products:products,
 active:active
});

export default rootReducer;
