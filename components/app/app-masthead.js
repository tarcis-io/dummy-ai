'use client';

import {
	Masthead,
	MastheadBrand,
	MastheadLogo,
	MastheadMain
} from '@patternfly/react-core';

export default function AppMasthead() {

	return (
		<>

			<Masthead>

				<MastheadMain>

					<MastheadBrand>

						<MastheadLogo></MastheadLogo>

					</MastheadBrand>

				</MastheadMain>

			</Masthead>

		</>
	);
};
