/** @format */

import { Card, FloatButton, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { audios } from '../audios';
import AudioItem from './components/AudioItem';
import { Add, SearchNormal1 } from 'iconsax-react';
import { replaceName } from '../utils/replaceName';
import AddAudioModal from '../modal/AddAudioModal';

const AudioScreen = () => {
	const [searchkey, setSearchkey] = useState('');
	const [results, setResults] = useState([]);
	const [isVisibleModalAddAudio, setIsVisibleModalAddAudio] = useState(false);

	useEffect(() => {
		if (!searchkey) {
			setResults([]);
		} else {
			const items = audios.filter((element) =>
				replaceName(element.title).includes(replaceName(searchkey))
			);

			setResults(items);
		}
	}, [searchkey]);

	return (
		<div className='container mt-4'>
			<div className='col-8 offset-2'>
				<Input
					placeholder='Search'
					size='large'
					value={searchkey}
					onChange={(val) => setSearchkey(val.target.value)}
					allowClear
					prefix={<SearchNormal1 size={20} color='#e0e0e0' />}
				/>
			</div>
			<div className='col mt-4'>
				<Card className='card-shadow '>
					{searchkey
						? results.map((item) => <AudioItem item={item} key={item.audio} />)
						: audios.map((item) => <AudioItem item={item} key={item.audio} />)}
					{/* {searchkey ? results.map  } */}
				</Card>
			</div>
			<FloatButton
				icon={<Add />}
				onClick={() => setIsVisibleModalAddAudio(true)}
			/>

			<AddAudioModal
				isVisible={isVisibleModalAddAudio}
				onClose={() => setIsVisibleModalAddAudio(false)}
			/>
		</div>
	);
};

export default AudioScreen;
