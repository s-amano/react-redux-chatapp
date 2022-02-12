import { useCallback, useEffect, useMemo } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { getMessages } from "../reducks/messages/selectors";
import { getUser } from "../reducks/user/selectors";
import {
  fetchMessages,
  pushMessage,
  reactionMessage,
} from "../reducks/messages/operations";
import { RootState } from "../reducks/store/store";

export const useMessages = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => {
    return state;
  }, shallowEqual);
  const { isSignedIn, signedInUsername } = getUser(selector);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  const modifiedMessages: {
    key: string;
    username: string;
    text: string;
    created_at?: number;
    reaction?: number;
  }[] = useMemo(() => {
    const messages = getMessages(selector);
    console.log(messages);
    console.log(typeof messages);
    return Object.entries(messages || {})
      .map((data) => {
        const [key, value] = data;
        return { key, ...value };
      })
      .reverse();
  }, [selector]);

  const chatContextSubmit = useCallback(
    (chatContext) => {
      if (isSignedIn) {
        dispatch(pushMessage(signedInUsername, chatContext));
      } else {
        alert("チャットを送信するには入室が必要です");
      }
    },
    [dispatch, isSignedIn, signedInUsername]
  );

  return {
    modifiedMessages,
    chatContextSubmit,
  };
};
