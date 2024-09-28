'use client';

import '@patternfly/react-core/dist/styles/base.css';

import {
	Masthead,
	MastheadContent,
	MastheadMain,
	Page,
	PageSection,
	PageSidebar
} from '@patternfly/react-core';

export function App({ children }) {

	const masthead = (
		<>

			<Masthead>

				<MastheadMain></MastheadMain>

				<MastheadContent></MastheadContent>

			</Masthead>

		</>
	);

	const sidebar = (
		<>

			<PageSidebar isSidebarOpen = { false }></PageSidebar>

		</>
	);

	return (
		<>

			<Page masthead        = { masthead }
				  sidebar         = { sidebar }
				  isContentFilled = { true }>

				<PageSection isFilled = { true }>{ children }</PageSection>

			</Page>

		</>
	);
};
