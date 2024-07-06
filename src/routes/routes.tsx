import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/Login";
import {adminRoutes } from "./admin.routes";

const router = createBrowserRouter([{
    path: "/admin",
    element: <App />,
    children: adminRoutes
},
{
    path: '/login',
    element: <LoginPage />
}
])


export default router;