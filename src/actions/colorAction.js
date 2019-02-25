import { POST_COLOR } from './types';
import { BASE_URL } from '../utilities/constants';

export const postColor = color => dispatch => {
  const url = `${BASE_URL}/all`;
  const body = JSON.stringify({ color: color });
  console.log('colorAction');
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
