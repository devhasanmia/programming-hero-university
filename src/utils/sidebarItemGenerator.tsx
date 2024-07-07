import { NavLink } from "react-router-dom";
import { TSidebarItem, TUserPaths } from "../types";

export const sidebarItemsGenerator = (items: TUserPaths[], role: string) => {
    const adminSidebarItems = items.reduce((acc: TSidebarItem[], cur) => {
        if (cur.path && cur.name) {
            acc.push({
                key: cur.name,
                label: <NavLink to={`/${role}/${cur.path}`}>{cur.name}</NavLink>,
            });
        }
        if (cur.children) {
            const children = cur.children
                .filter(child => child.name && child.path)
                .map((child) => ({
                    key: child.name!,
                    label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
                }));
            acc.push({
                key: cur.name!,
                label: cur.name,
                children,
            });
        }
        return acc;
    }, []);

    return adminSidebarItems;
}