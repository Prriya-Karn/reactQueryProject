import { createBrowserRouter } from "react-router";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import RegisterPage from "./Pages/RegisterPage";
import DashboardLayouts from "./Layouts/DashboardLayouts";
import BookPage from "./Pages/BookPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayouts/>,
        children: [
            {   
                path:"home",
                element: <HomePage />    
            },
            {   
                path:"book",
                element: <BookPage />    
            }
        ],
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    }
])

export default router;