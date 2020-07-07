// to protect components you need to be logged in to see

import React, { useContext } from 'react';
import { Route, Redirect } from "react-router-dom"
import { AuthContext } from "../context/authContext"


// collect all the properties not contained within component and roles and store it within rest
const PrivateRoute = ({ component: Component, roles, ...rest }) => {

    const { isAuthenticated, user } = useContext(AuthContext)


    return (
        // we only want people who have accounts (admins and users) to be able to see todos.
        <Route {...rest} render={ props => {
            if(!isAuthenticated)
                return <Redirect to={{ pathname: "/login", state: {from: props.location }}} />
                // checking to see if they have the correct roles. if they try to reach admin page, they'll
                // be redirected to the home page
            if(!roles.includes(user.role))
                return <Redirect to={{ pathname: "/home", state: {from: props.location }}} />
            return <Component {...props} />
        }} />
    );
};

export default PrivateRoute;

