import MenuItem from "@src/menu/models/menuItem";
import { getJson } from "@src/common/utils/apiClient";

export interface MenuService {
    fetchMenuItems: () => Promise<MenuItem[]>;
}

export function fetchMenuItems(): Promise<MenuItem[]> {
    return getJson("/fetchMenuItems");
}

export const menuService: MenuService = {
    fetchMenuItems,
};

export default menuService;
