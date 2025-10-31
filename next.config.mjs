/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "ngratesc.sirv.com",
                port: "",
                pathname: "/**"
            },
            {
                protocol: "https",
                hostname: "webclients.blob.core.windows.net",
                port: "",
                pathname: "/**"
            }
        ]
    }
};

export default nextConfig;
