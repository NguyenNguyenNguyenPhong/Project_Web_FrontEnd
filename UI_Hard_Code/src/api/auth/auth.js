import request from '../../utils/request'
export function signUp(data = {}) {
    return request({
        url: '/auth/register',
        method: 'POST',
        data
    })
}
export function signIn(data = {}) {
    return request({
        url: '/auth/authenticate',
        method: 'POST',
        data
    })
}