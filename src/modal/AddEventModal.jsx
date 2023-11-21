/** @format */

import { DatePicker, Form, Input, Modal, message } from 'antd';
import { addDoc, collection } from 'firebase/firestore';
import React from 'react';
import { db } from '../firebase/firebaseConfig';

const { RangePicker } = DatePicker;

const AddEventModal = (props) => {
	const { isVisible, onClose } = props;

	const [form] = Form.useForm();

	const handleAddEvent = (values) => {
		const { title, descrioption, rangeTime } = values;

		addDoc(collection(db, 'events'), {
			title: title ?? '',
			dates: [
				new Date(rangeTime[0]).getTime(),
				new Date(rangeTime[1]).getTime(),
			],
			description: descrioption ?? '',
		})
			.then(() => {
				message.success('Event added');
				form.resetFields();
				onClose();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<Modal
			onCancel={onClose}
			open={isVisible}
			width={768}
			okText='Add event'
			onOk={() => form.submit()}
			title='Add event'>
			<Form
				form={form}
				layout='vertical'
				onFinish={handleAddEvent}
				size='large'>
				<Form.Item name='title' label='Tite'>
					<Input placeholder='Title of event' />
				</Form.Item>

				<Form.Item name={'rangeTime'} label='Range time'>
					<RangePicker />
				</Form.Item>

				<Form.Item name={'descrioption'} label='Description'>
					<Input.TextArea rows={5} placeholder='Content' />
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default AddEventModal;
