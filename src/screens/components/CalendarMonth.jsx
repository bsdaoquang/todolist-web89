/** @format */

import { Badge, Calendar, Card, Modal, Spin, message } from 'antd';
import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebaseConfig';

const CalendarMonth = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [events, setEvents] = useState([]);
	const [isVisbleModalTodo, setIsVisbleModalTodo] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		onSnapshot(collection(db, 'events'), (snap) => {
			if (snap.empty) {
				message.error('Event not found!');
				setIsLoading(false);
			} else {
				const items = [];

				snap.forEach((item) => {
					items.push({
						id: item.id,
						...item.data(),
					});
				});

				setEvents(items);
				setIsLoading(false);
			}
		});
	}, []);

	const renderCell = (val) => {
		const items = events.filter(
			(element) =>
				new Date(element.dates[0]).getDate() === new Date(val).getDate()
		);

		return (
			items.length > 0 &&
			items.map((item) => <Badge status='success' text={item.title} />)
		);
	};

	return (
		<div>
			{isLoading ? (
				<Spin />
			) : (
				<Card>
					<Calendar
						cellRender={(val) => renderCell(val)}
						onSelect={() => setIsVisbleModalTodo(true)}
					/>
				</Card>
			)}

			<Modal
				open={isVisbleModalTodo}
				onCancel={() => setIsVisbleModalTodo(false)}>
				<p>Hienr thik </p>
			</Modal>
		</div>
	);
};

export default CalendarMonth;
