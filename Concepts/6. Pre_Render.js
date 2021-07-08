Next Js supports two types of rendering

1. static generation
2. server side rendering


1. static generation
  - HTML pages are generated at build time.
  - HTML pages are generated in advance when you make build of your application
  - this is recommended method to pre-render pages
  - page can be built once, cached by CDN & served to the client almost instantly
  e.g - blog pages, e-commerce product pages, documentation


by default next js pre-renders each page of app using static generation only without any additional configuration
