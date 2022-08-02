import * as request from './utils/requester';

export const getAll = () => request.get('/question');

export const getById = (id) => request.get(`/question/${id}`);

export const create = (data) => {
    data.author = localStorage.getItem('userId');
    return request.post('/question', data);
};

export const edit = (data) => request.put(`/question/${data._id}`);

export const del = (data) => request.del(`/question/${data._id}`);

export const getAllComments = (id) => request.get(`/question/${id}/comments`);

export const createComment = (data, id) => request.post(`/question/${id}/comments`, data);

export const deleteComment = (id) => request.del(`/question/${id}/comments`);
