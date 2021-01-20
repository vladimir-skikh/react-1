import React from "react";
import { Field, reduxForm } from "redux-form";
import style from "./Login.module.css";

export const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="input" type="text" placeholder={"Login"} name="login"/>
            </div>
            <div>
                <Field component="input" type="password" placeholder={"Password"} name="password"/>
            </div>
            <div>
                <label htmlFor="rememberMe">Remember Me</label>
                <Field component="input" type="checkbox" name="rememberMe" />
            </div>
            <div>
                <button type="submit">Sign in</button>
            </div>
        </form>
    );
};

let LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div className={style.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;
