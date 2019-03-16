const inputValidChecker = (id, value) => {
  console.log('id: ', id, 'value: ', value);
  const validationRule = {
    color: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value),
    email: /^[a-z0-9]+[.]?[a-z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value),
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value),
  };
  if (validationRule[id]) {
    return onSuccess(id, value);
  } else {
    return onError(id);
  }
};

const onError = id => {
  console.log('onError: ', id);
  return {
    [id + 'IsValid']: false,
    [id + 'InputStyle']: 'input error-border',
  };
};

const onSuccess = (id, value) => {
  console.log('onSuccess:', id, value);
  return {
    id,
    [id]: value,
    [id + 'IsValid']: true,
    [id + 'InputStyle']: 'input',
  };
};

export { inputValidChecker, onError, onSuccess };
