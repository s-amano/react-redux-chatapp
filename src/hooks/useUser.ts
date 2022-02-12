import { useCallback } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducks/store/store";
import { getUser } from "../reducks/user/selectors";
import { signOut } from "../reducks/user/operations";

export const useUser = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state, shallowEqual);
  const { isSignedIn } = getUser(selector);
  const exitFromChat = useCallback(() => {
    // setChatContext("");
    dispatch(signOut());
  }, [dispatch]);

  return {
    exitFromChat,
    isSignedIn,
  };
};
