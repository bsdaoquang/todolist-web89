/** @format */

import { Button, Progress, Slider, Space } from 'antd';
import { Like, Pause, Play, VolumeHigh, VolumeLow } from 'iconsax-react';
import React, { useEffect, useRef, useState } from 'react';
import { DateTime } from '../../utils/dateTime';

const countLike = Math.floor(Math.random() * 10);

const AudioItem = ({ item }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [position, setPosition] = useState(0);
	const [duration, setDuration] = useState(0);
	const [volume, setVolume] = useState(100);

	const audioRef = useRef(null);

	const onPlaying = () => {
		setDuration(audioRef.current.duration);
		setPosition(audioRef.current.currentTime);
	};

	const toogleAudio = () => {
		if (audioRef.current?.paused) {
			audioRef.current?.play();
			setIsPlaying(true);
		} else {
			audioRef.current?.pause();
			setIsPlaying(false);
		}
	};

	const handleSeekTo = (val) => {
		setPosition(val);
		audioRef.current.currentTime = val;
	};

	const handleChangeVolume = (val) => {
		setVolume(val);
		audioRef.current.volume = val / 100;
	};

	return item && item.audio ? (
		<div className='row mb-4'>
			<div className='col'>
				<div className='row'>
					<p
						style={{
							fontSize: 24,
							fontWeight: 'bold',
							color: '#e74c3c',
						}}>
						{countLike}
						<Like
							color={countLike % 2 ? 'coral' : '#e0e0e0'}
							variant='Bold'
							style={{ marginBottom: -4 }}
						/>
					</p>

					<div className='' style={{ padding: '0 16px' }}>
						<h5
							style={{
								margin: 0,
								fontSize: 18,
								color: '#8e44ad',
								fontWeight: 'bold',
							}}>
							{item.title}
						</h5>
						<p>{item.subtitle}</p>
					</div>
				</div>
			</div>
			<div className='col'>
				<div className='row'>
					<div className='col'>
						<Space>
							<Button
								type='text'
								icon={
									isPlaying ? (
										<Pause size={18} color='coral' />
									) : (
										<Play size={18} color='coral' />
									)
								}
								onClick={() => toogleAudio()}
							/>
							{`${DateTime.getTimeProgress(
								position
							)} / ${DateTime.getTimeProgress(duration)}`}
						</Space>
					</div>
					<div className='col'>
						<div className='row'>
							<VolumeLow size={14} />
							<div className='col'>
								<Slider
									value={volume}
									style={{ width: '100%' }}
									min={0}
									max={100}
									onChange={(val) => handleChangeVolume(val)}
								/>
							</div>
							<VolumeHigh size={14} />
						</div>
					</div>
				</div>

				<div className='col'>
					<Slider
						style={{ width: '100%' }}
						min={0}
						value={position}
						max={duration}
						onChange={(val) => handleSeekTo(val)}
					/>
				</div>
			</div>

			<audio src={item.audio} ref={audioRef} onTimeUpdate={onPlaying} />
		</div>
	) : (
		<></>
	);
};

export default AudioItem;
