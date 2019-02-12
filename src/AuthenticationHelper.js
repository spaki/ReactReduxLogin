import * as Helper from './Helper';

export function getLocalUser() {
    var userStored = localStorage.getItem(Helper.getUserStorageKey());

    if(!Helper.isNullOrWhiteSpaceOrEmpty(userStored)) {
      var user = JSON.parse(userStored);
      return user;
    }

    return null;
}

export function setLocalUser(user) {
    localStorage.setItem(Helper.getUserStorageKey(), JSON.stringify(user));
}