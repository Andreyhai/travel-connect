import React from 'react';
import {Route, Routes} from "react-router-dom";

import { 

  HOME_ROUTE,
  ERROR_ROUTE,
  ACCOUNT_ROUTE

} from "./utils/CONSTS.js";

import ErrorPage from './pages/error-page/ErrorPage.jsx';
import HomePage from './pages/home-page/HomePage.jsx';
import AccountPage from './pages/account-page/AccountPage.jsx';


const AppRouter = () => {

    return (
        <Routes>
            <Route path={HOME_ROUTE} element={<HomePage />} />
            <Route path={ERROR_ROUTE} element={<ErrorPage />} />
            <Route path={ACCOUNT_ROUTE} element={<AccountPage />} />
        </Routes>
    );
};

export default AppRouter;