import React from 'react';
import { connect } from 'react-redux';
import { LogIn, LogOut } from '../../redux/authentication/actions';
import { useHistory } from 'react-router-dom';

const LoginButton = ({ isLogin, loginAction, logoutAction }) => {
    console.log('islogin login btn =>', isLogin);
    const history = useHistory();

    const handleClick = () => {
        if(isLogin) {
            logoutAction();
            history.push('/');
        } else {
            loginAction();
            history.push('/about')
        }
    }

    return (
        <>
            <button onClick={handleClick}>{isLogin ? 'Logout Yuk' : 'Login Yuk'}</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginAction: () => dispatch(LogIn),
        logoutAction: () => dispatch(LogOut)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);