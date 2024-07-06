import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { NavLink } from "react-router-dom";
type TRoute = {
    path: string;
    element: ReactNode;
}

type TSidebarItem = {
    key: string;
    label: ReactNode;
    children?: TSidebarItem[];
}
const adminPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard />,
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Admin',
                path: 'create-admin',
                element: <CreateAdmin />,
            },
            {
                name: 'Create Student',
                path: 'create-student',
                element: <CreateStudent />,
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element: <CreateFaculty />,
            },
        ]
    },
    
]

export const adminRoutes = adminPaths.reduce((acc: TRoute[], cur) => {
    if (cur.path && cur.element) {
        acc.push({
            path: cur.path,
            element: cur.element,
        })
    }
    if (cur.children) {
        cur.children.forEach(child => {
            acc.push({
                path: child.path,
                element: child.element,
            })
        })
    }
    return acc
}, []);


export const adminSidebarItems = adminPaths.reduce((acc: TSidebarItem[], cur) => {
    if (cur.path && cur.name) {
        acc.push({
            key: cur.name,
            label: <NavLink to={`/admin/${cur.path}`}>{cur.name}</NavLink>,
        });
    }
    if (cur.children) {
        acc.push({
            key: cur.name,
            label: cur.name,
            children: cur.children.map((child) => ({
                key: child.name,
                label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
            })),
        });
    }
    return acc;
}, []);
