/** @format */

export const dateTime = (num) => {
	const date = new Date(num);

	return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};
