import CameraError   from './camera-error';
import CameraLoading from './camera-loading';

export default function Camera() {

	return (
		<>

			<CameraError title = { 'Error...' }
						 text  = { 'Camera Error!' } />

		</>
	);
};
