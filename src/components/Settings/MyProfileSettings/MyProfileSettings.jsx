import React from 'react';
import { Field, reduxForm } from "redux-form";
import formStyle from '../../common/FormControls/FormControls.module.css';
import {Input, Textarea} from '../../common/FormControls/FormControls';
import style from './MyProfileSettings.module.css';
import { required } from "../../../utils/validators/validators";
import classnames from 'classnames';


const MyProfileSettingsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.settingsForm}>
            {
                props.error ?
                <div className={formStyle.summaryFormError + ' ' + style.settingsFormError}>
                    {props.error}
                </div> : ''
            }
            <div className={style.settingsSectionInputs}>
                <div className={style.settingsSectionTitle}>
                    Main information
                </div>
                <div className={style.settingsInputBlock}>
                    <label className={style.settingsLabel} htmlFor="rememberMe">
                        Full name
                    </label>
                    <Field
                        inputClassName={style.settingsFormInput}
                        wrapperClassName={style.settingsFormWrapper}
                        component={Input}
                        name="fullName"
                        validate={[required]}
                        side='right'
                        errorSignSide='rigth'
                    />
                </div>
                <div className={style.settingsInputBlock}>
                    <label className={style.settingsLabel} htmlFor="rememberMe">
                        About me
                    </label>
                    <Field
                        inputClassName={style.settingsFormTextarea}
                        wrapperClassName={style.settingsFormWrapper}
                        component={Textarea}
                        name="aboutMe"
                    />
                </div>
                <div className={style.settingsInputBlock}>
                    <label className={style.settingsLabel} htmlFor="lookingForAJob">
                        Looking For A Job?
                    </label>
                    <Field
                        inputClassName={style.settingsFormCheckbox}
                        wrapperClassName={style.settingsFormWrapper}
                        component={Input}
                        type="checkbox"
                        name="lookingForAJob"
                    />
                </div>
                <div className={style.settingsInputBlock}>
                    <label className={style.settingsLabel} htmlFor="rememberMe">
                        Looking for a job description
                    </label>
                    <Field
                        inputClassName={style.settingsFormTextarea}
                        wrapperClassName={style.settingsFormWrapper}
                        component={Textarea}
                        name="lookingForAJobDescription"
                    />
                </div>
            </div>
            <div className={style.settingsSectionInputs}>
                <div className={style.settingsSectionTitle}>
                    Contacts
                </div>
                {
                    Object.keys(props.profile.contacts).map( key => {
                        return (
                            <div className={classnames(style.settingsInputBlock, style.settingsContactsInputBlock)}>
                                <label className={style.settingsLabel + ' ' + style.settingsContactsLabel + ' ' + key} htmlFor="rememberMe">
                                    {key}
                                </label>
                                <Field
                                    inputClassName={style.settingsFormInput}
                                    wrapperClassName={style.settingsFormWrapper}
                                    component={Input}
                                    type="text"
                                    name={"contacts." + key}
                                />
                            </div>
                        );
                    })
                }
            </div>
            <div className={style.settingsButtonInputBlock}>
                <button className={style.settingsSubmitButton} type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
}

let MyProfileSettingsFromRedux = reduxForm({
    form: 'myprofileSettings'
})(MyProfileSettingsForm);

const MyProfileSettings = (props) => {
    const onSubmitForm = (formData) => {
        props.onSubmitForm(formData);
    }
    return <MyProfileSettingsFromRedux onSubmit={onSubmitForm} {...props} initialValues={props.profile}/>;
}

export default MyProfileSettings;