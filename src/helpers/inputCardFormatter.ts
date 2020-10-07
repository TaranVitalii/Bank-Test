import * as R from 'ramda';

const inputCardFormatter = (value: string): string =>
  R.match(/[0-9]/g, value).join('');

export default inputCardFormatter;
