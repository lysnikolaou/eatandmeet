// The auth header is used to make authenticated HTTP requests to the server api using basic authentication.

export const authHeader = () => {
    // return authorization header with basic auth credentials
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.authdata) { return {'Authorization': `Basic ${user.authdata}`}; }
    return {};
};
