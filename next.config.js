/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
	reactStrictMode: false,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
		prependData: `@import "styles/_variables.scss";`,
	},
	images: {
		domains: ['images.unsplash.com'],
	},
	async redirects() {
		return [{ source: '/redirect', destination: '/', permanent: true }];
	},
	compiler: { styledComponents: true },
};

module.exports = nextConfig;
