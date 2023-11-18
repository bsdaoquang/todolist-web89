/** @format */

import { Button, Card, Input, List, Space, message } from 'antd';
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	onSnapshot,
	updateDoc,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import TaskItem from '../components/TaskItem';
import { db } from '../firebase/firebaseConfig';

const HomeScreen = () => {
	const [taskContent, setTaskContent] = useState('');
	const [tasks, setTasks] = useState([]);
	const [taskIndex, setTaskIndex] = useState();

	useEffect(() => {
		getTasks();
	}, []);

	useEffect(() => {
		if (taskIndex >= 0) {
			const item = tasks[taskIndex];
			setTaskContent(item.content);
		}
	}, [taskIndex]);

	const getTasks = () => {
		onSnapshot(collection(db, 'tasks'), (snap) => {
			if (snap.empty) {
				message.error('Data not found');
			} else {
				const items = [];

				snap.forEach((item) =>
					items.push({
						id: item.id,
						...item.data(),
					})
				);

				setTasks(items);
			}
		});
	};

	const handleAddNewTask = () => {
		if (taskContent) {
			const data = {
				content: taskContent,
				createdAt: Date.now(),
				updateAt: Date.now(),
				createdBy: 'Me',
			};

			if (taskIndex >= 0) {
				const item = tasks[taskIndex];

				updateDoc(doc(db, `tasks/${item.id}`), {
					content: taskContent,
					updateAt: Date.now(),
				}).then(() => message.success('Updated !!'));
				setTaskIndex(undefined);
				// update
			} else {
				addDoc(collection(db, 'tasks'), data).then(() => {
					console.log('Added');
				});
			}

			setTaskContent('');
			getTasks();
		} else {
			alert('Please add task content!!!');
		}
	};

	const handleEditTask = (index) => {
		setTaskIndex(index);
	};
	const handleDeleteTask = (id) => {
		deleteDoc(doc(db, `tasks/${id}`)).then(() => {
			message.success('Task deleted!!');
		});
	};

	const handleCompleteTaks = (id) => {
		updateDoc(doc(db, `tasks/${id}`), { isCompleted: true }).then(() =>
			message.success('Updated!!')
		);
	};

	return (
		<div>
			<div className='row'>
				<div className='col-8 offset-2'>
					<Space.Compact style={{ width: '100%' }}>
						<Input
							value={taskContent}
							onChange={(val) => setTaskContent(val.target.value)}
							onPressEnter={handleAddNewTask}
							maxLength={100}
							showCount
							allowClear
							size='large'
							placeholder='What do you want to do???'
						/>

						<Button onClick={handleAddNewTask} type='primary' size='large'>
							{taskIndex >= 0 ? 'Update' : 'Submit'}
						</Button>
					</Space.Compact>

					<Card className='mt-2'>
						<List
							dataSource={tasks}
							renderItem={(item, index) => (
								<TaskItem
									task={item}
									onComplete={(val) => handleCompleteTaks(item.id)}
									onDelete={() => handleDeleteTask(item.id)}
									onEdit={() => handleEditTask(index)}
								/>
							)}
						/>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default HomeScreen;
