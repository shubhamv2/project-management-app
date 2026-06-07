import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import MainLayout from "../../layouts/MainLayout";
import HomePage from "../../pages/HomePage";
import BoardPage from "../../pages/BoardPage";
import ActivityPage from "../../pages/ActivityPage";
import SettingsPage from "../../pages/SettingPage";
import AuthLayout from "../../layouts/AuthLayout";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import NotFoundPage from "../../pages/NotFoundPage";
import ProtectedRoute from "./routeGaurd/ProtectedRoute";
import PublicRoute from "./routeGaurd/PublicRoute";

const router = createBrowserRouter([
    {
        path:ROUTES.HOME,
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<HomePage/>
            },
            {
                path:ROUTES.BOARD,
                element:(<ProtectedRoute><BoardPage/></ProtectedRoute>)
            },
            {
                path:ROUTES.ACTIVITY,
                element:(<ProtectedRoute><ActivityPage/></ProtectedRoute>)
            },
            {
                path:ROUTES.SETTINGS,
                element:(
                    <ProtectedRoute>
                        <SettingsPage/>
                    </ProtectedRoute>
                    )
            },
        ]
    },
    {
        element:<AuthLayout/>,
        children:[
            {
                path:"/auth/login",
                element:(
                    <PublicRoute>
                        <LoginPage/>
                    </PublicRoute>
             )
            },
            {
                path:"/auth/register",
                element:(
                    <PublicRoute>
                        <RegisterPage/>
                    </PublicRoute>
            )
            },
        ],
    },
    {
        path:"*",
        element:<NotFoundPage/>
    }

])


const AppRouter = () =>{
    return (
        <RouterProvider router={router}/>
    )

}

export default AppRouter;