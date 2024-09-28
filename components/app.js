'use client';

import '@patternfly/react-core/dist/styles/base.css';

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
								   style        = { { display : 'inline', margin : '0px 24px' } }>DummyAI</Title>

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
