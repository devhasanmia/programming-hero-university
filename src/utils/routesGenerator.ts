import { TRoute, TUserPaths } from "../types";
export const routeGenerator = (items: TUserPaths[]) => {
  const Routes = items.reduce((acc: TRoute[], cur) => {
    if (cur.path && cur.element) {
      acc.push({
        path: cur.path,
        element: cur.element,
      });
    }
    if (cur.children) {
      cur.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }
    return acc;
  }, []);
  return Routes;
};
