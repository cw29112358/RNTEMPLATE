// /* global FormData */

import { request } from 'utils/request';

export function getStrapi(url) {
  return request({
    method: 'GET',
    url,
  });
}
export function createStrapi(url, body) {
  return request({
    method: 'POST',
    url,
    data: body,
  });
}
export function updateStrapi(url, body) {
  return request({
    method: 'PUT',
    url,
    data: body,
  });
}
export function deleteStrapi(url) {
  return request({
    method: 'DELETE',
    url,
  });
}

// example
export function loadExample() {
  return getStrapi('/api/example');
}

// AppRouter
export function logInByJwtToken() {
  return getStrapi('/api/auth/local');
}
