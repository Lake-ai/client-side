import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from "./user/userSlice";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { Persistor, persistStore } from 'redux-persist';

// Define the root reducer
const rootReducer = combineReducers({
    user: userReducer
});

// Configuration for redux-persist
const persistConfig = {
    key: 'root',
    storage,
    version: 1
};

// Create a persisted reducer with redux-persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

// Create a persistor for persisting the Redux store
export const persistor: Persistor = persistStore(store);
