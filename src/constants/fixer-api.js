
console.log(process.env);

export const ACCESS_KEY = '0a6136939fa4c907b1f3ef4c53f50602\n';
export const BASE_URL = 'http://data.fixer.io/api/';
export const REQUEST_SYMBOLS = BASE_URL + 'symbols?access_key=' + ACCESS_KEY;
export const DEFAULT_SYMBOL = 'EUR';
export const REQUEST_CONVERT = (date, toSymbol) => BASE_URL + `${date}?access_key=` + ACCESS_KEY + '&base=' + DEFAULT_SYMBOL + `&symbols=${toSymbol}`;
