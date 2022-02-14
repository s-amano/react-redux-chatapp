import { useCallback } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { RootState } from "reducks/store/store";
import { getUser } from "reducks/user/selectors";
import { signIn, signOut } from "reducks/user/operations";

export const useUser = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state, shallowEqual);
  const { isSignedIn, signedInUsername } = getUser(selector);
  const exitFromChat = useCallback(() => {
    dispatch(signOut());
  }, [dispatch]);

  const usernameSubmit = useCallback(
    (username: string) => {
      if (username === "") {
        alert("ユーザーネームを入力してください");
        return;
      }
      if (username.length >= 18) {
        alert("ユーザーネームは18文字以下にしてください");
        return;
      }
      dispatch(signIn(username));
    },
    [dispatch]
  );

  return {
    exitFromChat,
    usernameSubmit,
    isSignedIn,
    signedInUsername,
  };
};
