ROUTING
- folders correspond to routes with each nested folder representing part of the url- there are special files that can be used for specific ui, ex: layout, page, loading, not-found, error, route, template, default
RENDERING- static and dynamic rendering   - static is for server and client and can be generated at build time. the result can be cached and reused for subsequent requests. cached version can also be re-validated   - dynamic - client and server component are rendered on the server at request time, not cached
DATA FETCHING- async await based- React extends fetch to automatic dedupe  requests 
- Next extends fetch to allow each request option to have its own caching and revalidation rules- data should be fetched in server components- can fetch data in layouts and components  - however layouts cannot pass data to their child components. recommend to fetch data at the layout level. React/Next will dedupe if same data is requested by multiple "levels"- caching  - on server the cache lasts as long asthe lifetie of hte server request or until rendering is complete  - on the client lifetime is session time  - POST reqs are not automatically cached   - React provides a cache function if you are not able to use fetch- static vs dynamic data - static doesnt change very often, dynamic changes frequently or is specific to a user   - by default Next will do static fetches, meaning the data is fetched at build time and reused for on each request  - Next cache is persistent HTTP cache - it can 
   - During server rendering, when Next.js comes across a fetch, it will check the cache to see if the data is already available. If it is, it will return the cached data. If not, it will fetch and store data for future requests.  - revalidating - on-demand or background (at given times)
Static Generation with Data using getStaticProps

- when you export a page component, you can also export an async function called getStaticProps. If you do this, then:
    - getStaticProps runs at build time in production, and…    - Inside the function, you can fetch external data and send it as props to the page.
- 


