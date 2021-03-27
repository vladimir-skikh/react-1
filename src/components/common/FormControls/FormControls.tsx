import React, { FC } from 'react';
import style from './FormControls.module.css';
import classnames from 'classnames';
import { WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form';

type InputPropsType = {
    inputClassName?: string
    wrapperClassName?: string
    side?: string
    checkSubmit?: boolean
    errorSignSide?: string
}

type FromControlPropsType = {
    input: any,
    meta: WrappedFieldMetaProps,
    formControlProps: InputPropsType
}

/** используется деструктуризация (rest оператор) */
const FromControl: FC<FromControlPropsType> = ({
    meta,
    children, 
    formControlProps
}) => {
    const hasError = formControlProps.checkSubmit ? meta.touched && meta.error && meta.submitFailed : meta.touched && meta.error;
    const side = (formControlProps.side && formControlProps.side === 'right') ? style.right : style.left;
    const errorSignSide = (formControlProps.errorSignSide && formControlProps.errorSignSide === 'right') ? style.rightSignError : style.leftSignError;

    return (
        <div className={
            style.formControl + ' ' 
            + errorSignSide + ' ' 
            + formControlProps.wrapperClassName + ' '
            + (hasError ? style.error : '')
        }>
            {children}
            {
                ( hasError ) ?
                    <div className={classnames(style.errorMessageBlock, side)}>
                        <span className={style.errorMessage}>
                            {meta.error}
                        </span>
                    </div> 
                : ''
            }
        </div>
    );
}

export const Textarea: FC<WrappedFieldProps & InputPropsType> = (props) => {
    const {input, meta, ...restProps} = props;

    const formControlProps: InputPropsType = {
        inputClassName: props.inputClassName ? props.inputClassName : '',
        wrapperClassName: props.wrapperClassName ? props.wrapperClassName : '',
        side: props.side,
        errorSignSide: props.errorSignSide
    }

    return <FromControl 
        {...props} 
        meta={meta}
        input={input}
        formControlProps={formControlProps}
    > 
        <textarea {...input} {...restProps} className={formControlProps.inputClassName}/> 
    </FromControl>
}

export const Input: FC<WrappedFieldProps & InputPropsType> = (props) => {
    const {input, meta, ...restProps} = props;

    const formControlProps: InputPropsType = {
        inputClassName: props.inputClassName ? props.inputClassName : '',
        wrapperClassName: props.wrapperClassName ? props.wrapperClassName : '',
        side: props.side,
        errorSignSide: props.errorSignSide
    }

    return <FromControl 
        meta={meta}
        input={input}
        formControlProps={formControlProps}
    > 
        <input {...input} {...restProps} className={formControlProps.inputClassName}/> 
    </FromControl>
}