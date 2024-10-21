'use client';

import {
	Alert,
	Button
} from '@patternfly/react-core';

export default function CameraError({ title, text }) {

	const reloadThisPage = function () {
		window.location.reload();
	};

	return (
		<>

			<Alert variant     = { 'danger' }
				   title       = { title }
				   actionLinks = { <Button variant  = { 'secondary' }
										   isDanger = { true }
										   onClick  = { reloadThisPage }>Reload this page</Button> }>

				<p>{ text }</p>

			</Alert>

		</>
	);
};
