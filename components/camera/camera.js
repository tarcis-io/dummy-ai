import {
	useState
} from 'react';

export default function Camera() {

	const Status = {
		LOADING : 'loading'
	};

	const [status, setStatus] = useState(Status.LOADING);

	return (
		<>

			<div>Camera</div>

		</>
	);
};
