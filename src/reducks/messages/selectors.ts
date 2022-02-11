import { createSelector } from "reselect";
import { RootState } from "../store/store";

const messagesSelector = (state: RootState) => state.messages.messageList;

export const getMessages = createSelector(
  messagesSelector,
  (messageList) => messageList
);
