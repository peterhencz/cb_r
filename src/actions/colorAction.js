import { POST_COLOR, GET_COLORS } from './types';
import { BASE_URL } from '../utilities/constants';

export const postColor = color => dispatch => {
  const url = `${BASE_URL}/all`;
  const body = JSON.stringify({ color: color });

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

export const getColors = () => {
  const url = `${BASE_URL}/all`;
  return dispatch => {
    return fetch(url)
      .then(response => response.json())
      .then(colors => dispatch({ type: GET_COLORS, payload: colors }));
  };
};
