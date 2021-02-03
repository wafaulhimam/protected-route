import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ isLogin, component: Component, ...rest }) => {
    console.log('isLogin =>', isLogin);

    return (
        <Route
            {...rest}
            render={routerProps => {
                if(isLogin === true) {
                    return <Component {...routerProps} />
                } else {
                    return (
                        <Redirect
                            to='/'
                        />
                    )
                }
            }}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(ProtectedRoute);
