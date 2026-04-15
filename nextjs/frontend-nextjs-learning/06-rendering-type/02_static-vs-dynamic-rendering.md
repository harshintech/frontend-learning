# What is Static Rendering?
With static rendering, data fetching and rendering happens on the server at build time (when you deploy) or when revalidating data.

Whenever a user visits your application, the cached result is served. There are a couple of benefits of static rendering:

- Faster Websites - Prerendered content can be cached and globally distributed when deployed to platforms like Vercel. This ensures that users around the world can access your website's content more quickly and reliably.
- Reduced Server Load - Because the content is cached, your server does not have to dynamically generate content for each user request. This can reduce compute costs.
- SEO - Prerendered content is easier for search engine crawlers to index, as the content is already available when the page loads. This can lead to improved search engine rankings.


Static rendering is useful for UI with no data or data that is shared across users, such as a static blog post or a product page. It might not be a good fit for a dashboard that has personalized data which is regularly updated.

The opposite of static rendering is dynamic rendering.

## Static Rendering – Example

### Use Case
A blog page that shows the same content to all users.

### Example (Next.js)
```js
// app/blog/page.js

export default function BlogPage() {
  return (
    <div>
      <h1>My Blog</h1>
      <p>This content is static and the same for everyone.</p>
    </div>
  );
}
```


# What is Dynamic Rendering?
With dynamic rendering, content is rendered on the server for each user at request time (when the user visits the page). There are a couple of benefits of dynamic rendering:

- Real-Time Data - Dynamic rendering allows your application to display real-time or frequently updated data. This is ideal for applications where data changes often.
- User-Specific Content - It's easier to serve personalized content, such as dashboards or user profiles, and update the data based on user interaction.
- Request Time Information - Dynamic rendering allows you to access information that can only be known at request time, such as cookies or the URL search parameters.

---


## Dynamic Rendering – Example

### Use Case
A dashboard that shows personalized or frequently updated data.

### Example (Next.js)
```js
// app/dashboard/page.js

export default async function DashboardPage() {
  const res = await fetch("https://api.example.com/user", {
    cache: "no-store",
  });
  const user = await res.json();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user.name}</p>
    </div>
  );
}
```

### Quick Summary :
- Static Rendering → Build once, reuse many times
- Dynamic Rendering → Render on every request