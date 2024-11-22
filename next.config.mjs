const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "via.placeholder.com",
			},
			{
				protocol: "https",
				hostname: "unpkg.com",
			},
		],
	},
};

export default nextConfig;
