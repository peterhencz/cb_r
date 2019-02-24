import { POST_COLOR } from './types';
import { BASE_URL } from '../constants';

export const postColor = color => dispatch => {
  const url = `${BASE_URL}/all`;
  fetch(url, {
    mode: 'cors',
    method: 'post',
    body: JSON.stringify({ color: color }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  dispatch({
    type: POST_COLOR,
    payload: color,
  });
};
