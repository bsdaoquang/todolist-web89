/** @format */

import React, { useState } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import CalendarDay from './components/CalendarDay';
import CalendarWeek from './components/CalendarWeek';
import CalendarMonth from './components/CalendarMonth';
import { CalendarSearch } from 'iconsax-react';
import CalendarSider from './components/CalendarSider';

const TimeTableScreen = () => {
	const [calendarType, setCalendarType] = useState('');

	return (
		<div className='container-fluid'>
			<HeaderComponent onCalendarSelected={(val) => setCalendarType(val)} />

			<div className='container-fluid'>
				<div className='row'>
					<div className='col-3'>
						<CalendarSider />
					</div>
					<div className='col-9'>
						{calendarType === 'day' ? (
							<CalendarDay />
						) : calendarType === 'week' ? (
							<CalendarWeek />
						) : (
							<CalendarMonth />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TimeTableScreen;
