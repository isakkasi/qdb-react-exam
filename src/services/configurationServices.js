import * as request from './utils/requester';


//Course
export const getAllCourses = () => request.get('/course') 

export const createCourse = (data) => request.post('/course', data)

export const editCourse = (data) => request.put(`/course/${data._id}`, data)

export const deleteCourse = (data) => request.del(`/course/${data._id}`)

//ATA
export const getAllAta = () => request.get('/ata')

export const getAtaById = async (id) => request.get(`/ata/${id}`)

export const createAta = async (data) => request.post('/ata', data)

export const editAta = async (data) => request.put(`/ata/${data._id}`, data)

export const deleteAta = async (data) => request.del(`/ata/${data._id}`)