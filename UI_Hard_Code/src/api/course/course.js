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
export function getSegmentList(courseId) {
    console.log('segment api đây', courseId)
    return request({
        url: `/course-segments/course/${courseId}`,
        method: 'GET',
    })
}
