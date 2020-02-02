import { api } from './instance';

export const getValuesRequest = () => api.get('/api/values/current');

export const getSeenNumsRequest = () => api.get('/api/values/all');

export const sendNumber = data => api.post('/api/values', data);
