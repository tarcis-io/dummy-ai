'use client';

import {
	Page,
	PageSection
} from '@patternfly/react-core';

export default function App({ children }) {

	return (
		<>

			<Page>

				<PageSection>{ children }</PageSection>

			</Page>

		</>
	);
};
