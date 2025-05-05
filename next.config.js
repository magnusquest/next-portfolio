/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			"media.graphassets.com",
			"us-east-1-shared-usea1-02.graphassets.com"
		],
		loader: "default" // Or create a custom loader if needed for specific Hygraph transformations
	}
};

module.exports = {
	...nextConfig,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.graphassets.com", // replace with your actual image host
				port: "",
				pathname: "/**"
			},
			{
				protocol: "https",
				hostname: "us-east-1-shared-usea1-02.graphassets.com",
				port: "",
				pathname: "/**"
			}
		]
	}
};
