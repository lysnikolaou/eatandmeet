import config from '../config/config';
import {authHeader} from '../helpers/auth-header';

const handleResponse = (response) => {
    return response.text().then((text) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                window.location.reload();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
};

const getAll = () => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };

    return fetch(`${config.apiUrl}/events/`, requestOptions).then(handleResponse);
};

const getById = (id) => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };

    return fetch(`${config.apiUrl}/events/${id}/`, requestOptions).then(handleResponse);
};

const update = (event) => {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(event),
    };

    return fetch(`${config.apiUrl}/events/${event.id}/`, requestOptions).then(handleResponse);
};

// prefixed function name with underscore because delete is a reserved word in javascript
const _delete = (id) => {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(),
    };

    return fetch(`${config.apiUrl}/events/${id}`, requestOptions).then(handleResponse);
};

export const eventService = {
    getAll,
    getById,
    update,
    delete: _delete,
};
