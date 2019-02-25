import { POST_COLOR, GET_COLOR } from './types';
import { BASE_URL } from '../utilities/constants';

export const postColor = color => dispatch => {
  const url = `${BASE_URL}/all`;
  const body = JSON.stringify({ color: color });
  console.log('colorAction');
  console.log(url);
  fetch(url, {
    mode: 'cors',
    method: 'post',
    body,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
    },
  }).then(color => {
    dispatch({
      type: POST_COLOR,
      payload: color,
    });
  });
};

export const getColor = dispatch => {
  console.log('getColor');
  const url = `${BASE_URL}/all`;
  fetch(url, {
    mode: 'cors',
    method: 'get',
    header: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
    .then(responsJson => {
      dispatch({
        type: GET_COLOR,
        payload: responsJson.data,
      });
    })
    .catch(error => console.error('Error', error));
};
