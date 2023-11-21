/** @format */

import { Button, Radio } from 'antd';
import React, { useEffect, useState } from 'react';
import AddEventModal from '../modal/AddEventModal';

const HeaderComponent = (props) => {
	const { onCalendarSelected } = props;

	const [calendaType, setCalendaType] = useState('month');
	const [isVisibleModalAddEvent, setIsVisibleModalAddEvent] = useState(false);

	useEffect(() => {
		onCalendarSelected(calendaType);
	}, [calendaType]);

	return (
		<div>
			<div className='row  ' style={{ alignItems: 'center', padding: 10 }}>
				<div className='col'>
					<h1>Calendar</h1>
				</div>
				<div className='col'>
					<div
						className='row'
						style={{
							justifyContent: 'space-between',
						}}>
						<Radio.Group
							value={calendaType}
							size='large'
							onChange={(val) => setCalendaType(val.target.value)}>
							<Radio.Button value={'day'}> Day</Radio.Button>
							<Radio.Button value={'week'}>Week</Radio.Button>
							<Radio.Button value={'month'} type='primary'>
								Month
							</Radio.Button>
						</Radio.Group>
						<Button
							onClick={() => setIsVisibleModalAddEvent(true)}
							size='large'
							color='coral'
							type='primary'>
							Add Event
						</Button>
					</div>
				</div>
			</div>

			<AddEventModal
				onClose={() => setIsVisibleModalAddEvent(false)}
				isVisible={isVisibleModalAddEvent}
			/>
		</div>
	);
};

export default HeaderComponent;
