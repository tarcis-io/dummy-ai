'use client';

import {
	Page,
	PageSection
} from '@patternfly/react-core';

export default function AppPage({ children }) {

	return (
		<>

			<Page>

				<PageSection>{ children }</PageSection>

			</Page>

		</>
	);
};
