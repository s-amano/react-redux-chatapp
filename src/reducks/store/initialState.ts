import { RootState } from "./store";

export const initialState: RootState = {
  user: {
    isSignedIn: false,
    signedInUsername: "",
  },
};

export default initialState;
