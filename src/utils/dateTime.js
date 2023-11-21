/** @format */

import { add0ToNumber } from './add0ToNumber';

export class DateTime {
	static dateTime = (num) => {
		const date = new Date(num);

		return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
	};

	static getTimeProgress = (time) => {
		//console.log(time);

		let hour = Math.floor(time / 3600);
		let min = Math.floor((time - hour * 3600) / 60);

		if (min > 59) {
			min = min - 59;
			hour += 1;
		}

		const second = Math.floor(time % 60);

		return `${hour > 0 ? `${add0ToNumber(hour)}:` : ''}${add0ToNumber(
			min
		)}:${add0ToNumber(second)}`;
	};
}
