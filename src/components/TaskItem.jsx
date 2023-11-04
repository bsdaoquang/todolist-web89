/** @format */

import { Button, Checkbox, List, Popover, Space } from 'antd';
import React from 'react';
import { dateTime } from '../utils/dateTime';

const TaskItem = ({ task, onEdit, onDelete, onComplete }) => {
	return (
		<List.Item
			extra={
				<Space>
					<Button
						onClick={onEdit}
						icon={<i className='fas fa-edit text-success' />}
						type='text'
					/>
					<Button
						onClick={onDelete}
						icon={<i className='fas fa-trash text-danger' />}
						type='text'
					/>
				</Space>
			}>
			<List.Item.Meta
				avatar={<Checkbox onChange={(val) => onComplete(val.target.checked)} />}
				title={task.content}
				description={dateTime(task.updateAt)}
			/>
		</List.Item>
	);
};

export default TaskItem;
