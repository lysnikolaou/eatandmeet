
export const ValidateEmail  = (email) => {
    console.log(email)
    let emailValid = (new RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i).test(email));
    return emailValid ? '' : 'Email is Invalid';

};

export const ValidatePassword  = (password) => {

    console.log(password);

    if(password.length < 6 || password.l > 10)
        return 'Password must be between 6- 10 Characters';

    if(!(new RegExp("^(?=.*[a-z])").test(password)))
        return 'Password must contain at least 1 lowercase alphabetical character';

    if(!(new RegExp("^(?=.*[A-Z)])").test(password)))
        return 'Password must contain at least 1 uppercase alphabetical character';

    if(!(new RegExp("^(?=.*[0-9)])").test(password)))
        return 'Password must contain at least 1 numeric character';

    return '';
};
