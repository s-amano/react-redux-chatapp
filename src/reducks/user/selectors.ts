import { createSelector } from "reselect";
import { RootState } from "../store/store";

const usersSelector = (state: RootState) => state.user;

export const getUser = createSelector([usersSelector], (state) => state);
