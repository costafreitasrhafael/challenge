import intl from 'react-intl-universal';

const locales: any = {
  'pt-BR': require('./pt-BR.json'),
};

const currentLocale = locales[navigator.language] ? navigator.language : 'pt-BR';

intl.init({ currentLocale, locales });

export default intl;
