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
    const hasError = meta.touched && meta.error;
    const side = (props.side && props.side === 'right') ? style.right : style.left;

    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
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
    return <FromControl {...props} side={props.side}> <textarea {...input} {...restProps} /> </FromControl>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FromControl {...props} side={props.side}> <input {...input} {...restProps} /> </FromControl>
}