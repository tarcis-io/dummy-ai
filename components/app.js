'use client';

import '@patternfly/react-core/dist/styles/base.css';

import {
	Page,
	PageSection
} from '@patternfly/react-core';

export function App({ children }) {

	return (
		<>

			<Page isContentFilled = { true }>

				<PageSection isFilled = { true }>{ children }</PageSection>

			</Page>

		</>
	);
};
