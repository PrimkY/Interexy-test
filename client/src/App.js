import React, {useContext, useEffect, useState} from 'react';
import AppRouter from "./routing/AppRouter";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";

const App = observer(() => {
    const {user} = useContext(Context)

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
    })},[])

    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter>
            </AppRouter>
        </BrowserRouter>
);
});

export default App;
