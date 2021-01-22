export const required = (value) => {
    let check = value ? undefined : 'Field is required';
    return check;
}

const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength10 = maxLength(10);
export const maxLength300 = maxLength(10);
export const maxLength3000 = maxLength(10);

export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;