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
      - Query Object: { "pid": "abc" } _NOTE: Route parameters override query parameters_

    - Multiple dynamic route segments work the same way.
      - Route: "pages/post/[pid]/[comment].js" will match the route "/post/abc/a-comment"
      - Query Object: { "pid": "abc", "comment": "a-comment" } _NOTE: Query object key's for route parameters are dependent on value used within brackets for page file._
