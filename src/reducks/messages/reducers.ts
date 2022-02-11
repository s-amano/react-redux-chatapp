import * as Actions from "./actions";
import { initialState } from "../store/initialState";

export const MessagesReducer = (state = initialState.messages, action: any) => {
  switch (action.type) {
    case Actions.FETCH_MESSAGES:
      return {
        ...state,
        messageList: action.payload,
      };
    default:
      return state;
  }
};
