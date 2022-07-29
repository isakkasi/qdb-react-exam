import * as request from "./utils/requester";

export const getInfo =() => request.get('/dashboard') 