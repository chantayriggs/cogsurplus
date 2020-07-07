// this is to make sure that when you are logged in, you cannot access the login or register components

import React, { useContext } from 'react';
import { Route, Redirect } from "react-router-dom"
import { AuthContext } from "../context/authContext"


// collect all the properties not contained within component and roles and store it within rest
const UnprivateRoute = ({ component: Component, roles, ...rest }) => {

    const { isAuthenticated } = useContext(AuthContext)


    return (
        // we only want people who have accounts (admins and users) to be able to see todos.
        <Route {...rest} render={ props => {

            // if the user is logged in, redirect to home page
            // else just render the component
            if(isAuthenticated)
                return <Redirect to={{ pathname: "/home", state: {from: props.location }}} />
            return <Component {...props} />
        }} />
    );
};

export default UnprivateRoute;