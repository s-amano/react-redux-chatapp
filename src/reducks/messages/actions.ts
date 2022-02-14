import { Messages } from "reducks/messages/types";

export const FETCH_MESSAGES = "FETCH_MESSAGES";
export const fetchMessagesAction = (messages: Messages) => {
  return {
    type: "FETCH_MESSAGES",
    payload: messages,
  };
};
