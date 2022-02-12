import React, { useCallback } from "react";
import { useMessages } from "../hooks/useMessages";

export const MessageList: React.FC = React.memo(() => {
  const { modifiedMessages, reactionMessageSubmit, fromNowDateFunction } =
    useMessages();

  const handleReactionMessage = useCallback(
    (key, reaction) => {
      reactionMessageSubmit(key, reaction);
    },
    [reactionMessageSubmit]
  );
  console.log("messagelist render");
  return (
    <>
      {modifiedMessages.length > 0 ? (
        modifiedMessages.map((data) => {
          const timestamp = data.created_at;

          const fromNowDate = fromNowDateFunction(timestamp);

          const reaction = data.reaction ? data.reaction : 0;

          return (
            <div
              key={data.key}
              className="justify-center items-center py-4 flex flex-col border-b border-gray-400 px-4"
            >
              <div className="flex mr-auto">
                <div className="mr-4 text-sm text-gray-500">
                  {data.username}
                </div>
                <div className="text-gray-400 text-sm">{fromNowDate}</div>
              </div>
              <div className="flex w-full">
                <div className="w-10/12 text-base ml-7 text-black mr-4">
                  {data.text}
                </div>
                <div className="ml-auto text-lg text-black  bg-red-400 rounded-lg px-3 flex h-7 w-20">
                  <button
                    className="text-white w-full"
                    onClick={() => handleReactionMessage(data.key, reaction)}
                  >
                    <span>♥ {reaction > 999 ? 999 : reaction}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
});

MessageList.displayName = "MessageList";
