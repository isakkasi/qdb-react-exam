import * as request from './utils/requester';

export const getAll = () => request.get('/question');

export const getById = (id) => request.get(`/question/${id}`);

export const create = (data) => request.post('/question', data);

export const edit = (data) => request.put(`/question/${data._id}`, data);

export const del = (data) => request.del(`/question/${data._id}`);

export const getAllComments = (id) => request.get(`/question/${id}/comments`);

export const createComment = (data, id) => request.post(`/question/${id}/comments`, data);

export const deleteComment = (id) => request.del(`/question/${id}/comments`);

export const getHistory = (id) => request.get(`/question/${id}/history`)
