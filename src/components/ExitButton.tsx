import React from "react";
import { useUser } from "hooks/useUser";

export const ExitButton: React.FC = React.memo(() => {
  const { isSignedIn, exitFromChat } = useUser();
  return (
    <>
      {isSignedIn ? (
        <div className="ml-auto mr-2">
          <button
            className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
            type="button"
            onClick={() => exitFromChat()}
          >
            退出
          </button>
        </div>
      ) : (
        <div className="ml-auto mr-2">
          <button
            className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-white bg-gray-500 focus:outline-none"
            type="button"
            disabled
          >
            退出
          </button>
        </div>
      )}
    </>
  );
});

ExitButton.displayName = "ExitButton";
