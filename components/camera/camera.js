'use client';

import {
	useState
} from 'react';

import {
	Card
} from '@patternfly/react-core';

import CameraIsLoading from './camera-is-loading';

export default function Camera() {

	const [isLoading, setIsLoading] = useState(true);

	return (
		<>

			<Card>

				<CameraIsLoading />

			</Card>

		</>
	);
};
