import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import CreateAdmin from "../pages/CreateAdmin";
import CreateStudent from "../pages/CreateStudent";
import CreateFaculty from "../pages/CreateFaculty";

const router = createBrowserRouter([{
    path: "/admin",
    element: <App />,
    children:[
        {
            path: "dashboard",
            element: <Dashboard />,
        },
        {
            path: "create-admin",
            element: <CreateAdmin />,
        },
        {
            path: "create-student",
            element: <CreateStudent />,
        },
        {
            path: "create-faculty",
            element: <CreateFaculty />,
        }
    ]
},
])


export default router;