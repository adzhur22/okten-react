import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./slices";
import {postsReducer} from "./slices";

const rootReducer = combineReducers({
    userReducer,
    postsReducer
});
const setupStore = () => configureStore({reducer: rootReducer});

export {setupStore};
