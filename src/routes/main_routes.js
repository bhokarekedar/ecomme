import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Product from "../pages/Product";
import Profile from "../pages/Profile";
import UserInfo from "../pages/UserInfo";
import Users from "../pages/Users";

export const main_routes = [
    {
        path: "/",
        Component: HomePage,
    },
    {
        path: "/Product",
        Component: Product,
    },
    {
        path: "/Profile",
        Component: Profile,
    },
    {
        path: "/Users",
        Component: Users,
    },
    {
        path: "/Login",
        Component: Login,
    },
    {
        path: "/UserInfo/:id",
        Component: UserInfo,
    }
];