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
