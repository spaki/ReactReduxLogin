export function getApiEndpoint() {
    return "https://spakimail.azurewebsites.net/api/";
}

export function getUserStorageKey() {
    return "user-info";
}

export function getQueryString(data) {
    if(isNullOrWhiteSpaceOrEmpty(data))
      return "";

    var result = "?";

    for(var name in data) {
      var value = data[name];

      if(isNullOrWhiteSpaceOrEmpty(value))
        continue;

      result += name + "=" + encodeURIComponent(value.toString()) + "&";
    }

    result = result.substr(0, result.length - 1);

    return result;
}

export function getHeaders() {
    var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    var userStored = localStorage.getItem(getUserStorageKey());

    if(!isNullOrWhiteSpaceOrEmpty(userStored)) {
      var user = JSON.parse(userStored);
      headers["Authorization"] = "Bearer " + user.token;
    }

    return headers;
}

export function isNullOrWhiteSpaceOrEmpty(value) {
    return typeof value === "undefined" || value == null || value == "" || (typeof value === "string" && value.trim() == "") || (Array.isArray(value) && value.length < 1);
}