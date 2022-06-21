const environmentUrls = new Map();

environmentUrls.set("localhost","http://localhost:8080");
environmentUrls.set(
    "book-store-web-client.herokuapp.com", 
    "https://my-spring-book-store.herokuapp.com"
);

export default environmentUrls.get(window.location.hostname);