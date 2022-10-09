import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./car.slicer/car.slicer";


const rootReducer = combineReducers({
    carReducer
});

const setupStore = () => configureStore({reducer: rootReducer});

export {setupStore};