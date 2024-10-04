'use client';

import {
	useState
} from 'react';

import {
	Card
} from '@patternfly/react-core';

import CameraIsLoading from './camera-is-loading';

export default function Camera() {

	const Status = {
		LOADING : 'loading'
	};

	const [status, setStatus] = useState(Status.LOADING);

	return (
		<>

			<Card>

				<CameraIsLoading />

			</Card>

		</>
	);
};
