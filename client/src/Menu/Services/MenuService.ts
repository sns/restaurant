import MenuItem from "@src/Menu/Models/MenuItem";
import { getJson } from "@src/Common/Utils/ApiClient";

export interface MenuService {
  fetchMenuItems: () => Promise<MenuItem[]>;
}

export function fetchMenuItems(): Promise<MenuItem[]> {
  return getJson("/fetchMenuItems");
}

export const menuService: MenuService = {
  fetchMenuItems
};

export default menuService;
