Fallback
  - it is mandatory.
  - accepts 3 values:- false, true, 'blocking'


1. getStaticPaths fallback: false
    - the paths returned from getStaticPaths will be rendered to HTML at build time by getStaticProps.
    
    - if fallback is set to false, then any path which is not returned by getStaticPaths will show 404 page
      e.g if our getStaticPath returning path for posts 1, 2, 3 & user entered 4 then it will show 404 page
      
      
    - if our getStaticPaths returning 3 paths then when we build our app using npm build, then inside build folder we can see 3 html pages created for those paths(1.html, 2.html, 3.html)

  
  when to use?
    - when we have small number of paths to pre render in our app
    - a blog site with few articles
  
  
  
 
  
2. getStaticPaths fallback: true
  - the paths returned from getStaticPaths will be rendered to HTML at build time by getStaticProps.
  
  - if fallback is set to true, then any path which is not returned by getStaticPaths will not show 404 page. instead next.js will serve a fallback version of the page
    on the first request to such a path.
      e.g if our getStaticPath returning path for posts 1, 2, 3 & user entered 4 then it will fallback page
      
  - in the background, next.js will statically generate the requested path HTML & JSON. this includes running getStaticProps.
  
  - when thats done the browser receives the JSON which will be used to automatically render the page. from user point of view, the page will be swapped from 
    fallback page to the full page.
    
    
      
