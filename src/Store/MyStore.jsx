import {configureStore}from '@reduxjs/toolkit';
import UserReducer from '../reducers/UserReducer';
import { ApiHandler } from '../Component/TodosApi';
export const store = configureStore({
  reducer: {
    UserReducer,
  [ApiHandler.reducerPath]: ApiHandler.reducer
},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ApiHandler.middleware),
});   