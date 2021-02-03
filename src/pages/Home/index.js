import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LogIn } from '../../redux/authentication/actions';

const Home = ({ loginAction }) => {
    let history = useHistory();

    const handleLogin = () => {
        console.log('login');
        loginAction();
        history.push('/about');
    }

    return (
        <>
            <p>This is Home Page</p>
            <button onClick={handleLogin}>Login</button>
        </>
    )
}

const mapDispatchToProps = (dispatch) => ({
        loginAction: () => dispatch(LogIn)
})

export default connect(null, mapDispatchToProps)(Home);