import React from 'react'
import Login from '../authentication/components/Login'
import { loginUser } from '../authentication/actions'

class LoginPage extends React.Component {

    componentDidMount() {
        document.title = 'Authentication'
    }

    render() {
        const { dispatch } = this.props;
        return (
            <Login onLoginClick={ creds => dispatch(loginUser(creds)) } />
        )
    }

}

export default LoginPage;
