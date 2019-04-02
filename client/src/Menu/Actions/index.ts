import ActionName from "./ActionName";
import MenuItem from "@src/Menu//Models/MenuItem";

let nextMenuItem = 0;
export const actions = {
  createMenuItem: (name: string, price: number) => ({
    type: ActionName.CreateMenuItem,
    payload: {
      menuItemKey: nextMenuItem++,
      name,
      price
    } as MenuItem
  })
};

export default actions;
