import request from '../../utils/request'
export function getCourseList() {
    return request({
        url: '/course',
        method: 'GET',
    })
}
export function getCourseDetail(id) {
    return request({
        url: `/course/${id}`,
        method: 'GET',
    })
}
