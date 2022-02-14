import React, { useState, useCallback } from "react";
import { useUser } from "hooks/useUser";

export const EnterForm: React.FC = React.memo(() => {
  const { isSignedIn, usernameSubmit } = useUser();
  const [username, setUsername] = useState<string>("");

  const handleUsername = useCallback((event: any) => {
    const username = event.target.value;
    setUsername(username);
  }, []);

  const handleUsernameSubmit = useCallback(
    (username) => {
      usernameSubmit(username);
      setUsername("");
    },
    [usernameSubmit]
  );

  return (
    <>
      {isSignedIn ? (
        <></>
      ) : (
        <div className="flex flex-col w-10/12 px-3 md:px-28">
          <div className="flex">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-4"
              id="username"
              type="text"
              placeholder="Username"
              onChange={handleUsername}
              value={username}
              name="username"
            />
            <button
              className="w-24 inline-flex items-center justify-center rounded-full h-12 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
              type="button"
              onClick={() => handleUsernameSubmit(username)}
            >
              入室
            </button>
          </div>
          <div className="flex justify-center items-center mt-4 h-7"></div>
        </div>
      )}
    </>
  );
});

EnterForm.displayName = "EnterForm";
