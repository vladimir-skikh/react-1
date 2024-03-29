export const required = (value: string): string | undefined => {
    let check = value ? undefined : 'Field is required';
    return check;
}

const maxLength = (
    max: number
) => (value: string): string | undefined => value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength10 = maxLength(10);
export const maxLength300 = maxLength(300);
export const maxLength3000 = maxLength(3000);

export const email = (value: string): string | undefined => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;