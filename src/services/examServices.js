import * as request from './utils/requester';

export const getAll = () => request.get('/exam');

export const getById = (id) => request.get(`/exam/${id}`);

export const create = (data) => request.post('/exam', data);

export const edit = (data) => request.put(`/exam/${data._id}`, data);

export const del = (data) => request.del(`/exam/${data._id}`);
