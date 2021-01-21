export const required = (value) => {
    let check = value ? undefined : 'Field is required';
    return check;
}

const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength10 = maxLength(10);