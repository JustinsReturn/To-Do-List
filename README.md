# To-Do-List

A simple to-do list

Notes About Next.js:

- ROUTING:

  - Dynamic Routing:

    - Create a dynamic route by adding brackets to a page "[param]". ie. url slugs, pretty urls, etc.
    - "pages/post/[pid].js" will match routes like "/post/1" and "/post/abc".

    - Examples of query object with sample routes:

      - Route: "/post/abc"
      - Query Object: { "pid": "abc" }

      - Route: "/post/abc?foo=bar"
      - Query Object: { "foo": "bar", "pid": "abc" }

      - Route: "/post/abc?pid=123"
      - Query Object: { "pid": "abc" } -_NOTE: Route parameters override query parameters_

    - Multiple dynamic route segments work the same way.

      - Route: "pages/post/[pid]/[comment].js" will match the route "/post/abc/a-comment"
      - Query Object: { "pid": "abc", "comment": "a-comment" } -_NOTE: Query object key's for route parameters are dependent on value used within brackets for page file._

    - Catch all routes:

      - Dynamic routes can be extended to catch all paths by adding the spread operator inside the dynamic routing path's brackets. Matched parameters will be sent as a query parameter as an array.
      - Example:

        - File Path: pages/post/[...pid].js
        - Route: "/post/12/abc"
        - Query Object: { "pid": ["12", "abc"] }

      - Optional catch all routes:
      - Catch all routes can be made optional by placing another set of brackets around the catch all route. -_NOTE: The main difference between the catch all and optional catch all routes is that a route without additional parameters is also matched_
      - Example:

        - File Path: pages/post/[...pid].js
        - Route: "/post"
        - Query Object: {}

        - File Path: pages/post/[[...pid]].js
        - Route: "/post/12/abc"
        - Query Object: { "pid": ["12", "abc"] }
