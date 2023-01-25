import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import Logo from "assets/logo.svg";

import './index.scss';
import {login} from "../../services/apiService";

const EMAIL_PROVIDERS = ['joonko.co'];


const formFields = [
    {type: 'email', name: 'email', placeholder: 'Enter work email'},
    {type: 'password', name: 'password', placeholder: 'Enter password'}
];

const Login = () => {
    const history = useHistory();
    const [values, setValues] = useState({[formFields[0].name]: 'sdv@joonko.co', [formFields[1].name]: '12345'});
    const [isError, setIsError] = useState(false);

    const onChangeInput = (e) => {
        setValues(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        setIsError(false);
        if (isValidForm()) {
            try {
                await login(values);
                history.push('/');
            } catch (err) {
                setIsError(true);
                console.error('Login error', err);
            }
        } else {
            setIsError(true);
        }
    }

    const isValidForm = () => {
        const emailProvider = values.email.split('@')[1];
        return EMAIL_PROVIDERS.includes(emailProvider) && values.password;
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src={Logo} className="header__logo" alt="logo" />
                <div className="header-wrapper">
                    <span className="title">Joonko's Jobs Manager</span>
                    <span className="subtitle">Enter your details</span>
                </div>
                <form className="auth-form" onSubmit={onSubmitForm}>
                    {formFields.map(({type, name, placeholder}) => (
                        <input
                            key={`form__${name}`}
                            type={type}
                            name={name}
                            placeholder={placeholder}
                            value={values[name]}
                            onChange={onChangeInput}
                        />
                    ))}
                    <button type="submit">Log in</button>
                </form>
                {isError &&
                <span className="error-msg">An error occurred, please check your credentials and try again.</span>}
            </div>
        </div>
    )
}

export default Login;