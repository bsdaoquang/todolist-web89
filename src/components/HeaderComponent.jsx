/** @format */

import React from 'react';
import TitleComponent from './TitleComponent';
import { colors } from '../constansts/colors';
import { Avatar, Button } from 'antd';
import { SearchNormal1 } from 'iconsax-react';

const HeaderComponent = () => {
	return (
		<div>
			<div className='row ' style={{ padding: '30px 20px' }}>
				<div className='col-3'>Health score</div>
				<div className='col text-center'>
					<TitleComponent
						text={'Our best healthy'}
						color={'rgba(255, 255, 255, 0.5)'}
						weight={'500'}
					/>
					<TitleComponent text={'Food recipes'} color={colors.white} />
				</div>
				<div className='col-3'>
					<div
						className='row'
						style={{
							justifyContent: 'space-between',
							display: 'flex',
						}}>
						<Button
							type='text'
							icon={<SearchNormal1 color={colors.white1} size={22} />}
						/>
						<Avatar size={34}>Q</Avatar>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderComponent;
