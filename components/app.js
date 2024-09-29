'use client';

import {
	Masthead,
	Page,
	PageSection
} from '@patternfly/react-core';

export function AppMasthead() {

	return (
		<>

			<Masthead></Masthead>

		</>
	);
};

export function App({ children }) {

	return (
		<>

			<Page masthead        = { <AppMasthead /> }
				  isContentFilled = { true }>

				<PageSection isFilled = { true }>{ children }</PageSection>

			</Page>

		</>
	);
};
