import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { messagesRef } from "./firebase/firebase";
import { RootState } from "./reducks/store/store";
import { getUser } from "./reducks/user/selectors";
import { shallowEqual, useSelector } from "react-redux";

function App() {
  const selector = useSelector((state: RootState) => state, shallowEqual);
  const { isSignedIn, signedInUsername } = getUser(selector);
  console.log(isSignedIn, signedInUsername);
  useEffect(() => {
    messagesRef.on("value", (snapshot) => {
      console.log("test", snapshot.val());
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-3xl">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
