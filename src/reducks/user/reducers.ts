import * as Actions from "./actions";
import { initialState } from "../store/initialState";

export const UsersReducer = (state = initialState.user, action: any) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.SIGN_OUT:
      return {
        ...initialState.user,
      };
    default:
      return state;
  }
};
