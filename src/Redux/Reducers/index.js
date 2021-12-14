import errorReducer from "./errorReducer";
import imageReducer from "./imageReducer";
import loadingReducer from "./loadingReducer";
import { combineReducers } from "redux";


const rootReducer=combineReducers({
    isLoading: loadingReducer,
    images:imageReducer,
    error: errorReducer
})


export default rootReducer;

