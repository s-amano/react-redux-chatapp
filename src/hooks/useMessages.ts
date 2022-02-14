import { useCallback, useEffect, useMemo } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { getMessages } from "reducks/messages/selectors";
import { getUser } from "reducks/user/selectors";
import {
  fetchMessages,
  pushMessage,
  reactionMessage,
} from "../reducks/messages/operations";
import { ModifiedMessages } from "reducks/messages/types";
import { RootState } from "../reducks/store/store";

// dayjs周りの設定 - 相対日時のプラグインを有効化&日本語化
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ja";

dayjs.extend(relativeTime);
dayjs.locale("ja");

export const useMessages = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => {
    return state;
  }, shallowEqual);
  const { isSignedIn, signedInUsername } = getUser(selector);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  const modifiedMessages: ModifiedMessages[] = useMemo(() => {
    const messages = getMessages(selector);
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

  const reactionMessageSubmit = useCallback(
    (key: string, nowReaction: number) => {
      if (isSignedIn) {
        dispatch(reactionMessage(key, nowReaction));
      } else {
        alert("リアクションには入室が必要です");
      }
    },
    [dispatch, isSignedIn]
  );

  const fromNowDateFunction = useCallback((timestamp: number | undefined) => {
    return timestamp && typeof timestamp === "number"
      ? dayjs(new Date(timestamp)).fromNow()
      : null;
  }, []);

  return {
    modifiedMessages,
    chatContextSubmit,
    reactionMessageSubmit,
    fromNowDateFunction,
  };
};
