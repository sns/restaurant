import { combineReducers } from "redux";
import menu from "@src/Menu/Reducers/Menu";

import MenuItem from "@src/Menu/Models/MenuItem";

export interface RootState {
  menuItems: MenuItem[];
}

export const rootReducer = combineReducers({
  menuItems: menu
});
