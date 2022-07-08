import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { clayAPI } from "../services/ClayService";

import userReducer from './reducers/UserSlice';


const rootReducer = combineReducers({
    userReducer,
    [clayAPI.reducerPath] : clayAPI.reducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
            .concat(clayAPI.middleware) 
    })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
