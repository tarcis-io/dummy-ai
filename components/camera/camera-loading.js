'use client';

import {
	Card,
	CardBody,
	Spinner
} from '@patternfly/react-core';

export default function CameraLoading() {

	return (
		<>

			<Card>

				<CardBody>

					<Spinner size       = { 'lg' }
							 aria-label = { 'Camera is loading...' } />

				</CardBody>

			</Card>

		</>
	);
};
