import React from 'react';
import style from './FormControls.module.css';

/**
 * 
 * Сделать нормальные отображения ошибок!!!
 * 
 */
/** используется деструктуризация (rest оператор) */
const FromControl = ({
    input, 
    meta,
    ...props
}) => {
    const hasError = props.checkSubmit ? meta.touched && meta.error && meta.submitFailed : meta.touched && meta.error;
    const side = (props.side && props.side === 'right') ? style.right : style.left;
    const errorSignSide = (props.errorSignSide && props.errorSignSide === 'right') ? style.rightSignError : style.leftSignError;

    return (
        <div className={
            style.formControl + ' ' 
            + errorSignSide + ' ' 
            + props.wrapperClassName + ' '
            + (hasError ? style.error : '')
        }>
            {props.children}
            {
                ( hasError ) ?
                    <div className={style.errorMessageBlock + ' ' + side}>
                        <span className={style.errorMessage}>
                            {meta.error}
                        </span>
                    </div> 
                : ''
            }
        </div>
    );
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    const inputClassName = props.inputClassName ? props.inputClassName : '';
    const wrapperClassName = props.wrapperClassName ? props.wrapperClassName : '';

    return <FromControl 
        {...props} 
        side={props.side} 
        errorSignSide={props.errorSignSide} 
        wrapperClassName={wrapperClassName}
    > 
        <textarea {...input} {...restProps} className={inputClassName}/> 
    </FromControl>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    const inputClassName = props.inputClassName ? props.inputClassName : '';
    const wrapperClassName = props.wrapperClassName ? props.wrapperClassName : '';

    return <FromControl 
        {...props} 
        side={props.side} 
        errorSignSide={props.errorSignSide} 
        wrapperClassName={wrapperClassName}
    > 
        <input {...input} {...restProps} className={inputClassName}/> 
    </FromControl>
}