'use client';

import {
	Alert
} from '@patternfly/react-core';

export default function CameraError({ title, text }) {

	return (
		<>

			<Alert variant = { 'danger' }
				   title   = { title }>

				<p>{ text }</p>

			</Alert>

		</>
	);
};
