/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["res.cloudinary.com"],
	},
	webpack5: true,
	webpack: (config) => {
		config.resolve.fallback = { fs: false }
		return config
	},
	compiler: {
		styledComponents: true,
	},
}

module.exports = nextConfig
