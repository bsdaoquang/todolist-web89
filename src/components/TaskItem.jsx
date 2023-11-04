/** @format */

import { Button, Checkbox, List, Popover, Space } from 'antd';
import React from 'react';
import { dateTime } from '../utils/dateTime';

const TaskItem = ({ task, onEdit, onDelete, onComplete }) => {
	return (
		<List.Item
			extra={
				<Space>
					{!task.isCompleted && (
						<Button
							onClick={onEdit}
							icon={<i className='fas fa-edit text-success' />}
							type='text'
						/>
					)}

					<Button
						onClick={onDelete}
						icon={<i className='fas fa-trash text-danger' />}
						type='text'
					/>
				</Space>
			}>
			<List.Item.Meta
				title={
					<Checkbox
						disabled={task.isCompleted}
						checked={task.isCompleted}
						onChange={(val) => onComplete(val.target.checked)}>
						<p
							style={{
								margin: 0,
								fontWeight: 'bold',
								color: task.isCompleted ? '#dadada' : '#212121',
								textDecorationLine: task.isCompleted ? 'line-through' : 'none',
							}}>
							{task.content}
						</p>
					</Checkbox>
				}
				description={dateTime(task.updateAt)}
			/>
		</List.Item>
	);
};

export default TaskItem;
