Next Js has implemented their own routing mechanism.

1. File-system based routing
    When a file is added to the pages folder in a project, it autimatically becomes available as route.
    
    i) Routing with pages
     
    - localhost:3000/
    - when we add index.js file inside pages folder it acts as a root.
    
    - index.js
      function Home(){
        return <h1> Home page </h1>
      }

    so when user hits localhost:3000/ then it will go to pages folder & look for index.js & render that page.
    so the output in this case will be "Home page"



    - localhost:3000/about
    - to show this route we need to add about.js file under pages folder

    
    -- nested Routes
    to render nested routes we need to nest its folders 
    
    - localhost:3000/blog/first  (nested Routes)
    - in this case we need to create blog folder under pages folder. inside blog folder create index.js & first.js
    - pages/blog/index.js   - localhost:3000/blog
    - pages/blog/first.js   - localhost:3000/blog/first



    - localhost:3000/product/1  - where 1 is a product id & it can change dynamically
    - pages/product/index.js  - localhost:3000/product
    - pages/product/[productId].js  - localhost:3000/product/1   - here [productId] will take dynamic id
    
    
    to get dynamic id inside component, we can access it using below approach.
    
    import {useRouter} from 'next/Router';
    
    const router = useRouter();
    const prodId = router.query.productId;    // this name should match with name we passed inside square brackets/ line no. 37




    - localhost:3000/product/1/review/10
    - pages/product/[productId]/review/[reviewId].js - localhost:3000/product/1/review/100   - here [id] will take dynamic id




     -- Catch all routes
     localhost:3000/docs/feature1/concept2, localhost:3000/docs/feature1, localhost:3000/docs/feature20/concept25, 

    pages/docs/[...params].js   - here params will return an array which include complete URL.
     
     const router = useRouter();
     const {params = []}  = router.query
     console.log(params); // params[0] = feature1,  params[1] = concept2,   params.lenght = 2
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     

