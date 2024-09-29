import '@patternfly/react-core/dist/styles/base.css';
import '@patternfly/react-styles/css/utilities/Display/display.css';
import '@patternfly/react-styles/css/utilities/Spacing/spacing.css';

import {
	App
} from '../components/app';

export const metadata = {
	title       : 'DummyAI',
	description : 'Artificial intelligence for dummies.'
};

export default function Layout({ children }) {

	return (
		<>

			<html lang      = { 'en' }
				  className = { 'pf-v6-theme-dark' }>

				<body>

					<App>{ children }</App>

				</body>

			</html>

		</>
	);
};
