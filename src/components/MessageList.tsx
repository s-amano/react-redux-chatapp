import React, { useCallback } from "react";
import { useMessages } from "hooks/useMessages";
import { MessageItem } from "components/MessageItem";

export const MessageList: React.FC = React.memo(() => {
  const { modifiedMessages, reactionMessageSubmit, fromNowDateFunction } =
    useMessages();

  const handleReactionMessage = useCallback(
    (key, reaction) => {
      reactionMessageSubmit(key, reaction);
    },
    [reactionMessageSubmit]
  );
  return (
    <>
      {modifiedMessages.length > 0 ? (
        modifiedMessages.map((data) => {
          const timestamp = data.created_at;

          const fromNowDate = fromNowDateFunction(timestamp);

          const reaction = data.reaction ? data.reaction : 0;

          return (
            <MessageItem
              key={data.key}
              keyId={data.key}
              username={data.username}
              text={data.text}
              reaction={reaction}
              fromNowDate={fromNowDate}
              handleReactionMessage={handleReactionMessage}
            />
          );
        })
      ) : (
        <></>
      )}
    </>
  );
});

MessageList.displayName = "MessageList";
