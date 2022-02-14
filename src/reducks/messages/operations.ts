import { messagesRef, firebaseTimestamp, messageRef } from "../../firebase";

import { fetchMessagesAction } from "reducks/messages/actions";

export const fetchMessages = () => {
  return async (dispatch: any) => {
    messagesRef.orderByKey().on("value", (snapshot) => {
      if (snapshot && snapshot.val()) {
        const messages = snapshot.val();

        dispatch(fetchMessagesAction(messages));
      }
    });
  };
};

export const pushMessage = (username: string, text: string) => {
  return async () => {
    const timestamp = firebaseTimestamp;

    const pushData = {
      username: username,
      text: text,
      created_at: timestamp,
      reaction: 0,
    };
    return messagesRef.push(pushData);
  };
};

export const reactionMessage = (key: string, nowReaction: number) => {
  return async () => {
    return messageRef(key).update({ reaction: (nowReaction += 1) });
  };
};
