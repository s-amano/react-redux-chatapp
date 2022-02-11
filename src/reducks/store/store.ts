import { createStore, combineReducers, applyMiddleware } from "redux";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import thunk from "redux-thunk";

import { UsersReducer } from "../user/reducers";

import { User } from "../user/types";

export interface RootState {
  user: User;
}

// 永続化の設定
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["users"],
};

// 永続化設定されたReducerとして定義
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers<RootState>({
    user: UsersReducer,
  })
);

const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
export default store;
