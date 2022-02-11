import { messagesRef, firebaseTimestamp, messageRef } from "../../firebase";

import { fetchMessagesAction } from "./actions";

export const fetchMessages = () => {
  console.log("fetch operation");
  return async (dispatch: any) => {
    messagesRef
      .orderByKey()
      .limitToLast(15)
      .on("value", (snapshot) => {
        if (snapshot && snapshot.val()) {
          const messages = snapshot.val();
          console.log(messages);

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
    console.log("pushdata", pushData);
    return messagesRef.push(pushData);
  };
};

export const reactionMessage = (key: string, nowReaction: number) => {
  return async () => {
    return messageRef(key).update({ reaction: (nowReaction += 1) });
  };
};
