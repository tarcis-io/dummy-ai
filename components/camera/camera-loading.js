'use client';

import {
	Bullseye,
	Card,
	CardBody,
	Spinner
} from '@patternfly/react-core';

export default function CameraLoading() {

	return (
		<>

			<Card>

				<CardBody>

					<Bullseye>

						<Spinner size       = { 'lg' }
								 aria-label = { 'Camera is loading...' } />

					</Bullseye>

				</CardBody>

			</Card>

		</>
	);
};
