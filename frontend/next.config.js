/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
				{
						protocol: 'http',
						hostname: 'localhost',
						port: '8000',
						pathname: '**',
				},
		],
		domains: ['localhost', '127.0.0.1']
	},
}

module.exports = nextConfig