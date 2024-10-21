'use client';

import {
	useState
} from 'react';

import CameraLoading from './camera-loading';

export default function Camera() {

	const Status = {
		LOADING : 'loading'
	};

	const [status, setStatus] = useState(Status.LOADING);

	if (status === Status.LOADING) {

		return (
			<>

				<CameraLoading />

			</>
		);
	}

	return (
		<>

			<div>Camera</div>

		</>
	);
};
