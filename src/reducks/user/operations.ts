import { signInAction, signOutAction } from "reducks/user/actions";
import { persistor } from "reducks/store/store";

export const signIn = (username: string) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    const isSignedIn = state.user.isSignedIn;

    if (!isSignedIn) {
      dispatch(
        signInAction({
          isSignedIn: true,
          signedInUsername: username,
        })
      );
    }
  };
};

export const signOut = () => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    const isSignedIn = state.user.isSignedIn;

    if (isSignedIn) {
      dispatch(signOutAction());
      persistor.purge();
    }
  };
};
