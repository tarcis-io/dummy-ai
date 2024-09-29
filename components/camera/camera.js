'use client';

export default function Camera() {

	const mediaStreamConstraints = {
		audio : true,
		video : true
	};

	navigator.mediaDevices.getUserMedia(mediaStreamConstraints).then(mediaStream => {

		const video = document.getElementById('video');
		video.srcObject = mediaStream;
	});

	return (
		<>

			<video id       = { 'video' }
				   autoPlay = { true }
				   muted    = { true }></video>

		</>
	);
};
