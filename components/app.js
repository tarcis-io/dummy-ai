'use client';

import {
	Page,
	PageSection
} from '@patternfly/react-core';

export default function App({ children }) {

	return (
		<>

			<Page isContentFilled = { true }>

				<PageSection isFilled = { true }>{ children }</PageSection>

			</Page>

		</>
	);
};
