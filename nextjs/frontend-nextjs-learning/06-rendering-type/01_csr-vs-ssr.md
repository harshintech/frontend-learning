# What is client-side rendering?

Client-side rendering (CSR) is a JavaScript rendering technique where the final HTML content and user interface (UI) components are generated on the client's browser using JavaScript.

In the CSR approach:

- The server sends an initial HTML file with minimal content
- The client-side JavaScript code fetches data from the server
- The JavaScript code renders the complete UI on the browser

A major advantage of CSR is its ability to create highly interactive and dynamic web applications. This makes it a good fit for applications like chat apps and social media platforms but less of a fit for static websites. For websites though, it’s well-suited for single-page applications (SPAs), where content (ex: dynamic prices, live interactions with your content) is frequently updated without requiring a full page reload.

JavaScript frameworks like React, Vue.js, Angular, Svelte, Backbone.js, and Ember.js are commonly used to implement client-side rendering.

![client side rendring](./images/client_side_rendring.avif)

**The client-side rendering process typically follows these core steps:**

1. A server sends a blank HTML page with links to CSS and JavaScript files to the browser.
2. The browser parses the HTML and constructs the page's Document Object Model (DOM) tree.
3. The browser downloads the CSS and JavaScript resources. After that, it renders the web page and includes necessary elements like text, images, buttons, and styles.
4. The browser executes the JavaScript code to add interactivity and dynamic content like animations, form validations, and data fetched from an API.
5. The browser re-renders and updates parts of the web page based on user interactions like button clicks and form submissions.


***In short:*** In React, JavaScript dynamically generates all HTML inside a single root element

# What is server-side rendering?

Server-side rendering (SSR) is a rendering approach where the rendering process occurs on the server.

In this approach, the server generates the complete HTML page with the rendered UI and sends it to the client's browser. The browser then displays the fully rendered page without running any client-side JavaScript code.

SSR is the traditional method of rendering web pages and has been widely used for many years. It is well-suited for applications like ecommerce platforms and landing pages where search engine optimization (SEO) and initial page loads are important.

JavaScript meta-frameworks like Next.js, Nuxt.js, SvelteKit, Angular Universal, Remix, Astro, and Qwik are commonly used to implement server-side rendering.

![alt text](./images/server_side_rendring.avif)

The server-side rendering process typically follows these steps:

1. A server receives a request for a web page, retrieves the necessary data for that page, and populates that data into an HTML template.
2. The server generates the HTML markup for the page, renders its content, and applies the necessary styles.
3. After rendering the page, the server sends the fully rendered page to the browser to display. With SSR, the browser doesn’t have to execute any JavaScript code since the initial page load does not require JavaScript.
4. For subsequent user interactions and updates, the client-side JavaScript code takes over and handles the rendering and data fetching.

Next.js (SSR): JavaScript generates HTML on the server and delivers it to the browser.

***In short:*** Next.js uses server-side rendering where JavaScript executes on the server to generate HTML for each request, improving performance and SEO.