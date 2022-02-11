import "./App.css";
import { useEffect, useMemo } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { RootState } from "./reducks/store/store";
import { getUser } from "./reducks/user/selectors";
import { getMessages } from "./reducks/messages/selectors";
import { fetchMessages } from "./reducks/messages/operations";

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state, shallowEqual);
  const { isSignedIn, signedInUsername } = getUser(selector);
  console.log(isSignedIn, signedInUsername);
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

  console.log(modifiedMessages);
  return (
    <div className="flex flex-col justify-center items-center mt-10 pb-24 h-screen">
      {modifiedMessages.map((data) => {
        return (
          <div
            key={data.key}
            className="justify-center items-center py-4 flex flex-col border-b border-gray-400 px-4"
          >
            <div className="flex mr-auto">
              <div className="mr-4 text-sm text-gray-500">{data.username}</div>
            </div>
            <div className="flex w-full">
              <div className="w-10/12 text-base ml-7 text-black mr-4">
                {data.text}
              </div>
              <div className="ml-auto text-lg text-black  bg-red-400 rounded-lg px-3 flex h-7 w-20">
                <button className="text-white w-full">
                  <span>♥ {data.reaction}</span>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
