import "./App.css";
import { useEffect, useMemo } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { RootState } from "./reducks/store/store";
import { getMessages } from "./reducks/messages/selectors";
import { fetchMessages } from "./reducks/messages/operations";
import { Header } from "./components/Header";
import { MessagesHeaderForm } from "./components/MessagesHeaderForm";
import { MessageList } from "./components/MessageList";

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state, shallowEqual);

  console.log(selector.user);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center mt-10 pb-24 h-screen">
        <MessagesHeaderForm />
        <div className="w-10/12 px-3 md:px-28 flex flex-col my-8 overflow-y-auto h-[1055px] p-6">
          <MessageList />
        </div>
      </div>
    </>
  );
}

export default App;
