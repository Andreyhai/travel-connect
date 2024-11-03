import React from 'react';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import { HOME_ROUTE } from '../../utils/CONSTS';

const ErrorPage = () => {
  return (
    <React.Fragment>
        <h1>error</h1>
        <Link to={HOME_ROUTE}>
            to home
        </Link>
    </React.Fragment>
  );
};

export default ErrorPage;