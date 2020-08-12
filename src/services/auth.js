import { post, get } from './request';

export const fetchSignup = (email, password, profileImage) =>
  post('/api/v1/auth/signup', { email, password, profileImage });

export const fetchLogin = (email, password) =>
  post('/api/v1/auth/login', { email, password });

export const fetchVerify = () => get('/api/v1/auth/verify');
