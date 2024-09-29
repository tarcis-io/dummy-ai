'use client';

import {
	Page,
	PageSection
} from '@patternfly/react-core';

import AppMasthead from './app-masthead';

export default function AppPage({ children }) {

	return (
		<>

			<Page masthead        = { <AppMasthead /> }
				  isContentFilled = { true }>

				<PageSection isFilled = { true }>{ children }</PageSection>

			</Page>

		</>
	);
};
