import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import thunk from "redux-thunk";

import { UsersReducer } from "reducks/user/reducers";
import { MessagesReducer } from "reducks/messages/reducers";

import { User } from "reducks/user/types";
import { Messages } from "reducks/messages/types";

// windowが__REDUX_DEVTOOLS_EXTENSION_COMPOSE__を持つこととその型を明示する必要がある
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export interface RootState {
  user: User;
  messages: Messages;
}

// 永続化(redux-persist)の設定
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

// 永続化設定されたReducerとして定義
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers<RootState>({
    user: UsersReducer,
    messages: MessagesReducer,
  })
);

// ReduxDevToolsを利用するための設定
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
export default store;
