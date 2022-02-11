export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState: any) => {
  return {
    type: "SIGN_IN",
    payload: {
      isSignedIn: true,
      signedInUsername: userState.signedInUsername,
    },
  };
};

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
  console.log("action");
  return {
    type: "SIGN_OUT",
    payload: null,
  };
};
