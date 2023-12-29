export const createUrl = (pathname, params) => {
	const paramsString = params.toString();
	const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;
	return `${pathname}${queryString}`;
};

export const formattedPrice = (price) => {
	return price.toLocaleString('ru-RU', {
		style: 'currency',
		currency: 'RUB',
		minimumFractionDigits: 0,
	});
};