import { createStore, combineReducers, applyMiddleware } from "redux";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import thunk from "redux-thunk";

import { UsersReducer } from "reducks/user/reducers";
import { MessagesReducer } from "reducks/messages/reducers";

import { User } from "reducks/user/types";
import { Messages } from "reducks/messages/types";

export interface RootState {
  user: User;
  messages: Messages;
}

// 永続化(redux-persist)の設定
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
    messages: MessagesReducer,
  })
);

const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
export default store;
