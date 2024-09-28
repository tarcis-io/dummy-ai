'use client';

import '@patternfly/react-core/dist/styles/base.css';

import {
	Page,
	PageSection,
	PageSidebar
} from '@patternfly/react-core';

export function App({ children }) {

	const sidebar = (
		<>

			<PageSidebar isSidebarOpen = { false }></PageSidebar>

		</>
	);

	return (
		<>

			<Page sidebar         = { sidebar }
				  isContentFilled = { true }>

				<PageSection isFilled = { true }>{ children }</PageSection>

			</Page>

		</>
	);
};
