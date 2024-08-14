/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "ngratesc.sirv.com",
                port: "",
                pathname: "/**"
            }
        ]
    }
};

export default nextConfig;
