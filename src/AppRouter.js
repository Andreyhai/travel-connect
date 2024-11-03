import React from 'react';
import {Route, Routes} from "react-router-dom";

import { 

  HOME_ROUTE,
  ERROR_ROUTE

} from "./utils/CONSTS.js";

import ErrorPage from './pages/error-page/ErrorPage.jsx';
import HomePage from './pages/home-page/HomePage.jsx';


const AppRouter = () => {

    return (
        <Routes>
            <Route path={HOME_ROUTE} element={<HomePage />} />
            <Route path={ERROR_ROUTE} element={<ErrorPage />} />

        </Routes>
    );
};

export default AppRouter;