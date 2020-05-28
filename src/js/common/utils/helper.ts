export const CURRENCIES: { [key: string]: string } = {
	RUR: '₽',
	USD: '$',
};

export const isFunc = (f: () => any): boolean => {
	return typeof f === 'function';
};

/**
 * Разбивает число по разрядам
 * @param value
 */
export const beautifyNumber = (value: number): string => {
	return value.toString().replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
};

/**
 * Возвращает цену со знаком валюты
 * @param price
 * @param currencyCharCode
 */
export const beautifyPrice = (price: number, currencyCharCode: string): string => {
	return `${beautifyNumber(price)}&nbsp;${CURRENCIES[currencyCharCode]}`;
};
