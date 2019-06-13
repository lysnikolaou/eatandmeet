export const validateEmail = (email) => {
    if (email.length === 0) { return 'Email is required'; }

    if (!new RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i).test(email)) { return 'Email is invalid'; }

    return '';
};

export const validatePassword = (password) => {
    if (password.length === 0) { return 'Password is required'; }

    if (password.length < 6 || password.length > 10) { return 'Password must be between 6 - 10 Characters'; }

    if (!new RegExp('^(?=.*[a-z])').test(password)) { return 'Password must contain at least 1 lowercase character'; }

    if (!new RegExp('^(?=.*[A-Z)])').test(password)) { return 'Password must contain at least 1 uppercase character'; }

    if (!new RegExp('^(?=.*[0-9)])').test(password)) { return 'Password must contain at least 1 number'; }

    return '';
};

export const validateUsername = (username) => {
    if (username.length === 0) { return 'Username is required'; }

    if (username.length > 10 || username.length < 6) { return 'Username must be between 6 - 10 Characters'; }

    if (!new RegExp('^[a-z0-9]').test(username)) { return 'Username can only contain lowercase characters and numbers'; }

    return '';
};
