import { createSelector } from "reselect";
import { RootState } from "reducks/store/store";

const usersSelector = (state: RootState) => state.user;

export const getUser = createSelector([usersSelector], (state) => state);
