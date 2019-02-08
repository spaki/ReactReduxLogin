import * as Helper from './Helper';

export function Get(endpoint, data) {
    var querystring = "";

    if(!Helper.isNullOrWhiteSpaceOrEmpty(data))
        querystring = Helper.getQueryString(data);

    return fetch(
        Helper.getApiEndpoint() + endpoint + querystring,
        {
            headers: Helper.getHeaders(),
            method: "GET"
        }
    ).then(function(response) {
        return response.json();
    });
}

export function Post(endpoint, data) {
    return fetch(
        Helper.getApiEndpoint() + endpoint,
        {
            headers: Helper.getHeaders(),
            method: "POST",
            body: JSON.stringify(data)
        }
    )
    .then(function(response) {
        return response.json();
    });
}