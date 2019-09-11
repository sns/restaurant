import { combineReducers } from "redux";
import menuItems from "@src/menu/reducers/menu";
import MenuItem from "@src/menu/models/menuItem";

export interface RootState {
    menuItems: MenuItem[];
}

export const rootReducer = combineReducers<RootState>({
    menuItems,
});
