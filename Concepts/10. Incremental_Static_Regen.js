
when we create a build using static generation method then all the pages gets created at a build time only.

if we want to fetch data from an external API & show it on screen, then we use getStaticProps.

if we want to fetch dynamic data then we use getStaticPath with getStaticProps.


Static generation issues:-
  
  1. the build time is proportional to number of pages in application.
  2. A page once generated can contain same data till the time you rebuild the application.


lets consider one scenario to understand what the problem is.

I am building an e-commerce website where i am fetching 100 products from some random API. so all my 100 pages are generated at build time only.
to improve performance i can build only first 10 pages at build time & another 90 pages on request dynamically using getStaticPaths which will reduce total build time.

but an e-commerce website changes frequently (offers, price up down, some data updation)

lets say i am showing 3 products on website out if which 1 is generated at build time & other 2 are generating on request using getStaticPaths

price for 1st product is 2000INR

now admin has updated the price to 1500INR, but as our page is generated at build time it wont show an updated data.

same with getStaticPath - when user request for product 2, it will fetch data from an API for the first tieme & create a page. after page creation if admin again updated
the data then that change wont reflect as it will serve prevoiusly generated page for subsequent requests.



SO TO OVERCOME THIS PROBLEM INCREMENTAL STATIC GENERATION COMES IN PICTURE.
