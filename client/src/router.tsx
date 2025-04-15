import { createBrowserRouter } from "react-router";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import RegisterPage from "./Pages/RegisterPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
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