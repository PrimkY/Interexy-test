import {
    ERROR_PAGE,
    LOGIN_ROUTE,
    PERSONAL_ROUTE,
    PROFILE_ROUTE,
    REGISTRATION_ROUTE,
    TABLE_ROUTE
} from "../constants/conts";
import TablePage from "../pages/TablePage";
import Auth from "../pages/Auth";
import PersonalPage from "../pages/PersonalPage";
import Profile from "../pages/Profile";
import ErrorPage from "../pages/ErrorPage";

export const authRoutes = [
    {
        path: PROFILE_ROUTE,
        Component: <Profile/>
    },
    {
        path: TABLE_ROUTE,
        Component: <TablePage/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth/>
    },
    {
        path: PERSONAL_ROUTE + '/:id',
        Component: <PersonalPage/>
    },
    {
        path: ERROR_PAGE,
        Component: <ErrorPage/>
    }
]


export const publicRoutes = [
    {
        path: TABLE_ROUTE,
        Component: <TablePage/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth/>
    },
    {
        path: PERSONAL_ROUTE + '/:id',
        Component: <PersonalPage/>
    },
    {
        path: ERROR_PAGE,
        Component: <ErrorPage/>
    }
]
