import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import Storage from "redux-persist/lib/storage";
import Reducers from "./reducers";

const persistConfig = {
	key: "root",
	storage: Storage,
};

const persistReducers = persistReducer(persistConfig, Reducers);

export const store = configureStore({
	reducer: persistReducers,
	middleware: (getDefaultMiddleware) =>
	  getDefaultMiddleware({
		serializableCheck: {
		  ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
		},
	  }),
});

export const persistor = persistStore(store);
export default store;