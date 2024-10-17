'use client';

import {
	Card,
	Spinner
} from '@patternfly/react-core';

export default function CameraLoading() {

	return (
		<>

			<Card>

				<Spinner aria-label = { 'Camera is loading...' } />

			</Card>

		</>
	);
};
