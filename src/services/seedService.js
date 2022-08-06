import * as request from './utils/requester'


export const seed = () => request.get('/seed')

