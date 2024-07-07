import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/Login";
import { adminPaths } from "./admin.routes";
import { routeGenerator } from "../utils/routesGenerator";

const router = createBrowserRouter([{
    path: "/admin",
    element: <App />,
    children: routeGenerator(adminPaths)
},
{
    path: '/login',
    element: <LoginPage />
}
])


export default router;