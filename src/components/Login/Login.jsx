import React from "react";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { required, email } from "../../utils/validators/validators";
import {Input} from '../common/FormControls/FormControls';
import formStyle from '../common/FormControls/FormControls.module.css';
import style from "./Login.module.css";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {
                props.error ?
                <div className={formStyle.summaryFormError}>
                    {props.error}
                </div> : ''
            }
            <div className={style.loginInputBlock}>
                <Field
                    inputClassName={style.loginFormInput}
                    wrapperClassName={style.loginFormWrapper}
                    component={Input}
                    type="email"
                    placeholder={"Email"}
                    name="email"
                    validate={[required, email]}
                    side="right"
                    errorSignSide='right'
                />
            </div>
            <div className={style.loginInputBlock}>
                <Field
                    inputClassName={style.loginFormInput}
                    wrapperClassName={style.loginFormWrapper}
                    component={Input}
                    type="password"
                    placeholder={"Password"}
                    name="password"
                    validate={[required]}
                    side="right"
                    errorSignSide='right'
                />
            </div>
            <div className={style.loginInputBlock}>
                <label className={style.loginLabel + ' ' + style.loginLabelRememberMe} htmlFor="rememberMe">
                    Remember Me?
                </label>
                <Field
                    inputClassName={style.loginFormCheckbox}
                    component={Input}
                    type="checkbox"
                    name="rememberMe"
                    errorSignSide='right'
                />
            </div>
            {
                props.captchaUrl ?
                    <div className={style.loginFormCaptchaBlock}>
                        <img src={props.captchaUrl} alt="Captcha" className={style.loginFormCaptchaImage}/>
                        <div className={style.loginInputBlock}>
                            <label className={style.loginLabel} htmlFor="rememberMe">
                                Enter symbols from image
                            </label>
                            <Field
                                inputClassName={style.loginFormInput}
                                component={Input}
                                type="text"
                                name="captcha"
                                validate={[required]}
                                errorSignSide='right'
                            />
                        </div>
                    </div> : ''
            }
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
        props.submitLogin(formData);
    };

    if (props.isAuth) return <Redirect to="/profile" />

    return (
        <div className={style.loginPage}>
            <div className={style.login}>
                <h1 className={style.socialNetworkTitle}>MeesageMe</h1>
                <h1 className={style.formTitle}>Login</h1>
                <div className={style.formDescription}>Log into your account</div>
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
            </div>
        </div>
    );
};

export default Login;
