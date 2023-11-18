/** @format */

import React from 'react';
import { colors } from '../constansts/colors';

const TitleComponent = ({ text, color, size, weight }) => {
	return (
		<h1
			style={{
				color: color ?? colors.text,
				size: size ?? 18,
				fontWeight: weight ?? 'bold',
			}}>
			{text}
		</h1>
	);
};

export default TitleComponent;
