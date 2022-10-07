
export default function callApi(params) {
    let url = "https://api.qualops.com" + params.endpoint;
    let requestOptions = {
        method : params.method,
        headers : {
            ["content-type"] : "application/json",
            ...params.headers
        },
        body: JSON.stringify(params.body)
    }
    return fetch(url, requestOptions).then(res => res.json());
}