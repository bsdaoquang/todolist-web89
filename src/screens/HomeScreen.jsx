/** @format */

import { Button, Card, Input, List, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { LOCAL_DATA_NAME } from '../constants';
import TaskItem from '../components/TaskItem';

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
		const res = localStorage.getItem(LOCAL_DATA_NAME.tasks);

		res && setTasks(JSON.parse(res));
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
				// update

				const items = [...tasks];
				data.createdAt = items[taskIndex].createdAt;

				items[taskIndex] = data;

				localStorage.setItem(LOCAL_DATA_NAME.tasks, JSON.stringify(items));
				setTaskIndex(undefined);
			} else {
				// add new
				tasks.push(data);
				localStorage.setItem(LOCAL_DATA_NAME.tasks, JSON.stringify(tasks));
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
	const handleDeleteTask = (index) => {
		const items = [...tasks];
		items.splice(index, 1);

		localStorage.setItem(LOCAL_DATA_NAME.tasks, JSON.stringify(items));
		getTasks();
	};

	const handleCompleteTaks = (val, index) => {
		const items = [...tasks];
		const item = items[index];

		item.isCompleted = val;

		localStorage.setItem(LOCAL_DATA_NAME.tasks, JSON.stringify(items));
		getTasks();
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
									onComplete={(val) => handleCompleteTaks(val, index)}
									onDelete={() => handleDeleteTask(index)}
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
