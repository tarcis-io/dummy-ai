export default function manifest() {

	return {
		name             : 'DummyAI',
		short_name       : 'DummyAI',
		description      : 'Artificial intelligence for dummies.',
		id               : '/',
		start_url        : '/',
		theme_color      : '#151515',
		background_color : '#151515',
		orientation      : 'any',
		display          : 'standalone',
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
