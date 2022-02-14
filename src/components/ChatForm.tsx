import React, { useState, useCallback } from "react";
import { useMessages } from "hooks/useMessages";
import { useUser } from "hooks/useUser";

export const ChatForm: React.FC = React.memo(() => {
  const { signedInUsername } = useUser();
  const { chatContextSubmit } = useMessages();
  const [chatContext, setChatContext] = useState<string>("");

  const handleChatContext = useCallback((event: any) => {
    const chatcontext = event.target.value;
    setChatContext(chatcontext);
  }, []);

  const handleChatContextSubmit = useCallback(
    (chatContext) => {
      chatContextSubmit(chatContext);
      setChatContext("");
    },
    [chatContextSubmit]
  );

  return (
    <div className="flex flex-col w-10/12 px-3 md:px-28">
      <div className="flex justify-center items-center mb-4">
        <p className="text-lg font-bold">こんにちは!! {signedInUsername}さん</p>
      </div>
      <div className="flex">
        <input
          className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-4 bg-gray-200 rounded-full py-3 mx-4"
          id="chatcontext"
          type="text"
          onChange={handleChatContext}
          value={chatContext}
          name="chatcontext"
          placeholder="message"
        />
        <div className="items-center flex">
          <button
            className="w-24 mr-4 inline-flex items-center justify-center rounded-full h-12 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
            type="button"
            onClick={() => handleChatContextSubmit(chatContext)}
          >
            送信
          </button>
        </div>
      </div>
    </div>
  );
});

ChatForm.displayName = "ChatForm";
