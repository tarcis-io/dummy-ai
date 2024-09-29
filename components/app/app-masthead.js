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

							<Title headingLevel = { 'h2' }>DummyAI</Title>

						</MastheadLogo>

					</MastheadBrand>

				</MastheadMain>

			</Masthead>

		</>
	);
};
