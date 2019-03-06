const inputValidChecker = (id, value, errorMessage) => {
  const validationRule = {
    hex: /^(?=.{5,})([^0-9]*)+$/.test(value),
    email: /^[a-z0-9]+[.]?[a-z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value),
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value),
  };
  if (validationRule[id]) {
    return onSuccess(id, value);
  } else {
    return onError(id, errorMessage[id]);
  }
};

const onError = (id, errorMessage) => {
  return {
    errorMessage,
    errorClass: 'error-message',
    [id + 'IsValid']: false,
    [id + 'InputStyle']: 'input error',
  };
};

const onSuccess = (id, value) => {
  console.log(id, value);
  return {
    id,
    [id]: value,
    errorMessage: '',
    [id + 'IsValid']: true,
    [id + 'InputStyle']: 'input',
  };
};

export { inputValidChecker, onError, onSuccess };
