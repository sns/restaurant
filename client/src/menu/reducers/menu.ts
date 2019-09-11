import ActionName from "@src/menu/actions/actionName";
import { getPromiseType } from "@src/common/utils";
import { actions } from "@src/menu/actions/menu";
import MenuItem from "@src/menu/models/menuItem";

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
