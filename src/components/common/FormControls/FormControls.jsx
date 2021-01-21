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
    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            {props.children}
            {
                ( hasError ) ?
                    <span>
                        {meta.error}
                    </span> 
                : ''
            }
        </div>
    );
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FromControl {...props}> <textarea {...input} {...restProps} /> </FromControl>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FromControl {...props}> <input {...input} {...restProps} /> </FromControl>
}