'use client';

import {
	Masthead,
	MastheadBrand,
	MastheadLogo,
	MastheadMain,
	Title
} from '@patternfly/react-core';

export default function AppMasthead() {

	return (
		<>

			<Masthead>

				<MastheadMain>

					<MastheadBrand>

						<MastheadLogo>

							<img src = { '/images/logos/logo.svg' }
								 alt = { '' } />

							<Title className    = { 'pf-v6-u-display-inline pf-v6-u-mx-lg' }
								   headingLevel = { 'h2' }>DummyAI</Title>

						</MastheadLogo>

					</MastheadBrand>

				</MastheadMain>

			</Masthead>

		</>
	);
};
