function parseURL(url) {
    try {
        const parsedUrl = new URL(url);
        
        return {
            href: parsedUrl.href,
            origin: parsedUrl.origin,
            protocol: parsedUrl.protocol,
            username: parsedUrl.username,
            password: parsedUrl.password,
            host: parsedUrl.host,
            hostname: parsedUrl.hostname,
            port: parsedUrl.port,
            pathname: parsedUrl.pathname,
            search: parsedUrl.search,
            searchParams: Array.from(parsedUrl.searchParams.entries()),
            hash: parsedUrl.hash
        };
    } catch (e) {
        console.error("Invalid URL:", e);
        return null;
    }
}

// Example usage:
const url = "https://username:password@www.example.com:8080/pathname/?search=test#hash";
const result = parseURL(url);
console.log(result);


