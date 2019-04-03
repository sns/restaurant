import { combineReducers } from "redux";
import menuItems from "@src/Menu/Reducers/Menu";
import MenuItem from "@src/Menu/Models/MenuItem";

export interface RootState {
  menuItems: MenuItem[];
}

export const rootReducer = combineReducers<RootState>({
  menuItems
});
