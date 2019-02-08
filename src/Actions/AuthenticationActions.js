export function login(user) {
    return {
        type: 'LOGIN',
        payload: user,
    }
}

export function logoff() {
    return {
        type: 'LOGOFF',
        payload: null,
    }
}