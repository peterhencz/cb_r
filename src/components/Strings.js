import interStrings from '../resources/interStrings';

const Strings = stringKey => {
  const lang = window.navigator.language;

  switch (lang) {
    case 'hu':
      return interStrings.hu[stringKey];
    default:
      return interStrings.en[stringKey];
  }
};

export default Strings;
