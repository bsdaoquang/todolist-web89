/** @format */

import { Card, Checkbox, Menu, Calendar, Badge } from 'antd';
import React from 'react';
// import Calendar from 'react-calendar';

const CalendarSider = () => {
	const menuFilter = [
		{
			key: 1,
			label: 'Work-Orders',
			isChecked: true,
			color: 'coral',
		},
		{
			key: 2,
			label: 'Move-Ins',
			isChecked: true,
			color: 'coral',
		},
		{
			key: 3,
			label: 'Move-Outs',
			isChecked: true,
			color: 'coral',
		},
		{
			key: 4,
			label: 'Note & Reminders',
			isChecked: true,
			color: 'coral',
		},
	];

	return (
		<div>
			<Card title='Filter' bordered={false}>
				{menuFilter.map((item) => (
					<div key={item.key} className='mb-2'>
						<Checkbox checked={item.isChecked} color={item.color}>
							{item.label}
						</Checkbox>
					</div>
				))}
			</Card>
			<Card className='mt-4' bordered={false}>
				<Calendar
					fullscreen={false}
					headerRender={null}
					locale={'vi'}
					onChange={(val) => console.log(val)}
					cellRender={() => <Badge color='10' />}
				/>
			</Card>
		</div>
	);
};

export default CalendarSider;
