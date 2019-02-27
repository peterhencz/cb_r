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

export const load_colors = color => ({
  type: GET_COLOR,
  payload: color,
});

export const getColor = () => {
  console.log('getColor');
  const url = `${BASE_URL}/all`;
  return dispatch => {
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(load_colors(json)));
  };
};
