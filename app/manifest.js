export default function manifest() {

	return {
		name             : 'DummyAI',
		short_name       : 'DummyAI',
		description      : 'Artificial intelligence for dummies.',
		start_url        : '/',
		display          : 'standalone',
		background_color : '#151515',
		theme_color      : '#151515',
		icons            : [
			{
				src   : '/images/favicons/favicon-192.png',
				type  : 'image/png',
				sizes : '192x192'
			},
			{
				src     : '/images/favicons/favicon-512-maskable.png',
				type    : 'image/png',
				sizes   : '512x512',
				purpose : 'maskable'
			},
			{
				src   : '/images/favicons/favicon-512.png',
				type  : 'image/png',
				sizes : '512x512'
			}
		]
	};
};
