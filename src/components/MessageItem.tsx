import React from "react";

interface Props {
  keyId: string;
  username: string;
  text: string;
  reaction: number;
  fromNowDate: string | null;
  handleReactionMessage: (key: string, reaction: number) => void;
}

export const MessageItem: React.FC<Props> = React.memo((props: Props) => {
  const {
    keyId,
    username,
    text,
    reaction,
    fromNowDate,
    handleReactionMessage,
  } = props;
  return (
    <div className="justify-center items-center py-4 flex flex-col border-b border-gray-400 px-4">
      <div className="flex mr-auto">
        <div className="mr-4 text-sm text-gray-500">{username}</div>
        <div className="text-gray-400 text-sm">{fromNowDate}</div>
      </div>
      <div className="flex w-full">
        <div className="w-10/12 text-base ml-7 text-black mr-4">{text}</div>
        <div className="ml-auto text-lg text-black  bg-red-400 rounded-lg px-3 flex h-7 w-20">
          <button
            className="text-white w-full"
            onClick={() => handleReactionMessage(keyId, reaction)}
          >
            <span>♥ {reaction > 999 ? 999 : reaction}</span>
          </button>
        </div>
      </div>
    </div>
  );
});

MessageItem.displayName = "MessageItem";
