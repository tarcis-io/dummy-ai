'use client';

import '@patternfly/react-core/dist/styles/base.css';
import '@patternfly/react-styles/css/utilities/Display/display.css';
import '@patternfly/react-styles/css/utilities/Spacing/spacing.css';

import {
	Masthead,
	MastheadBrand,
	MastheadLogo,
	MastheadMain,
	Page,
	PageSection,
	PageSidebar,
	Title
} from '@patternfly/react-core';

export function App({ children }) {

	const masthead = (
		<>

			<Masthead display = { { default : 'inline' } }>

				<MastheadMain>

					<MastheadBrand>

						<MastheadLogo>

							<img src = { '/images/logos/logo.svg' }
								 alt = { 'logo' } />

							<Title headingLevel = { 'h2' }
								   className    = { 'pf-v6-u-display-inline pf-v6-u-mx-lg' }
								   style        = { { margin : '0px 24px' } }>DummyAI</Title>

						</MastheadLogo>

					</MastheadBrand>

				</MastheadMain>

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
