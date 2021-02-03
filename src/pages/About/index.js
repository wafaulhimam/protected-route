import React from 'react';
import { connect } from 'react-redux';
import { LogOut } from '../../redux/authentication/actions';
import { useHistory } from 'react-router-dom';


const About = ({ logoutAction }) => {
    const history = useHistory();
    
    const handleLogout = () => {
        console.log('logout');
        logoutAction();
        history.push('/');
    }

    return (
        <>
            <p>This is About Page Guys</p>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

const mapDispatchToProps = (dispatch) => ({
    logoutAction: () => dispatch(LogOut)
})

export default connect(null, mapDispatchToProps)(About);