'use client';

import {
	Page,
	PageSection
} from '@patternfly/react-core';

export function App({ children }) {

	return (
		<>

			<Page>

				<PageSection>{ children }</PageSection>

			</Page>

		</>
	);
};
