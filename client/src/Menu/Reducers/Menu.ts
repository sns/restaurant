import ActionName from "@src/Menu/Actions/ActionName";
import { getPromiseType } from "@src/Common/Utils";
import { actions } from "@src/Menu/Actions/Menu";
import MenuItem from "@src/Menu/Models/MenuItem";

const menu = (state = [], action: any) => {
  switch (action.type) {
    case getPromiseType(actions.fetchMenuItems).fulfilled:
      const menuItems: MenuItem[] = action.payload;
      return menuItems;
    case ActionName.CreateMenuItem:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default menu;
