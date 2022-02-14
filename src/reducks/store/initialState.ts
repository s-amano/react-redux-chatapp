import { RootState } from "reducks/store/store";

export const initialState: RootState = {
  messages: {
    messageList: {},
  },
  user: {
    isSignedIn: false,
    signedInUsername: "",
  },
};

export default initialState;
