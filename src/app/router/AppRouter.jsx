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
                element:<BoardPage/>
            },
            {
                path:ROUTES.ACTIVITY,
                element:<ActivityPage/>
            },
            {
                path:ROUTES.SETTINGS,
                element:<SettingsPage/>
            },
        ]
    },
    {
        element:<AuthLayout/>,
        children:[
            {
                path:"/auth/login",
                element:<LoginPage/>
            },
            {
                path:"/auth/register",
                element:<RegisterPage/>
            },
        ],
    },
    {
        path:"*",
        element:<NotFoundPage/>
    }

])


const AppRouter = ({children}) =>{
    return (
        <RouterProvider router={router}>
            {children}
        </RouterProvider>
    )

}

export default AppRouter;