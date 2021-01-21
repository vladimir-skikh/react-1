import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import {Input} from '../common/FormControls/FormControls';
import style from "./Login.module.css";

export const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.loginInputBlock}>
                <Field
                    className={style.loginFormInput}
                    component={Input}
                    type="email"
                    placeholder={"Email"}
                    name="email"
                    validate={[required]}
                />
            </div>
            <div className={style.loginInputBlock}>
                <Field
                    className={style.loginFormInput}
                    component={Input}
                    type="password"
                    placeholder={"Password"}
                    name="password"
                    validate={[required]}
                />
            </div>
            <div className={style.loginInputBlock}>
                <label className={style.loginLabel} htmlFor="rememberMe">
                    Remember Me
                </label>
                <Field
                    className={style.loginFormCheckbox}
                    component={Input}
                    type="checkbox"
                    name="rememberMe"
                />
            </div>
            <div className={style.loginInputBlock}>
                <button className={style.loginSubmitButton} type="submit">
                    Sign in
                </button>
            </div>
        </form>
    );
};

let LoginReduxForm = reduxForm({
    form: "login",
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
        /** вернуть логинизацию */
        //props.submitLogin(formData);
    };

    return (
        <div className={style.login}>
            <h1 className={style.formTitle}>Login</h1>
            <div className={style.formDescription}>Log into your account</div>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};

export default Login;
