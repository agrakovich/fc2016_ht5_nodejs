import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
//import './styles.scss';

class Login extends Component {

    handleLogin(event) {
        event.preventDefault()
        const username = this.refs.username
        const password = this.refs.password
        const creds = { username: username.value.trim(), password: password.value.trim() }
        this.props.onLoginClick(creds)
    }

    render() {
        const { errorMessage } = this.props;
        return (
            <section className="login">
                <header className="login__header">
                    <h2 className="login__header-title">Login</h2>
                </header>
                <form className="login__form" onSubmit={(event) => this.handleLogin(event)}>
                    <div className="login__body">
                        {errorMessage &&
                            <div className="login__form-errors">{errorMessage}</div>
                        }
                        <div className="login__form-row">
                            <label className="form-label login__form-label login__form-label--username" htmlFor="username">Name</label>
                            <input className="form-input login__form-input login__form-input--username" id="username" ref="username" />
                        </div>
                        <div className="login__form-row">
                            <label className="form-label login__form-label" htmlFor="password">Password</label>
                            <input className="form-input login__form-input" type="password" id="password" ref="password" />
                        </div>
                    </div>
                    <footer className="login__footer">
                        <button className="login__footer-button btn" type="submit">Login</button>
                    </footer>
                </form>
            </section>
        )
    }
}

Login.propTypes = {
    onLoginClick: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
}

const mapStateToProps = (state, ownProps) => ({
    errorMessage: state.authentication.errorMessage,
});

Login = connect(mapStateToProps)(Login);
export default Login;
