import { Messages } from "./types";

export const FETCH_MESSAGES = "FETCH_MESSAGES";
export const fetchMessagesAction = (messages: Messages) => {
  return {
    type: "FETCH_MESSAGES",
    payload: messages,
  };
};
