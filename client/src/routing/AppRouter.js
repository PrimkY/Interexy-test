import React, {useContext} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import {authRoutes, publicRoutes} from "./routes";
import {ERROR_PAGE, TABLE_ROUTE} from "../constants/conts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";


const AppRouter = observer(() => {
    const {user} = useContext(Context)

    console.log(user.isAuth)
    return user.isAuth ?(
        <Routes>
            {authRoutes.map(({path, Component}) => {
                return (<Route key={path} path={path} element={Component}/>)
            })}
            <Route path='*' element={<Navigate to={TABLE_ROUTE} replace/>}/>
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map(({path, Component}) => {
               return (<Route key={path} path={path} element={Component}/>)
            })}
            <Route path='*' element={<Navigate to={TABLE_ROUTE} replace/>}/>
        </Routes>
    );
});

export default AppRouter;
