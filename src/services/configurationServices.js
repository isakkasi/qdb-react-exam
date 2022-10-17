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

//Type
export const getAllType = () => request.get('/type')

export const getTypeById = async (id) => request.get(`/type/${id}`)

export const createType = async (data) => request.post('/type', data)

export const editType = async (data) => request.put(`/type/${data._id}`, data)

export const deleteType = async (data) => request.del(`/type/${data._id}`)
