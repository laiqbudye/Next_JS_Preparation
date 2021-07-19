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
      e.g if our getStaticPath returning path for posts 1, 2, 3 & user entered 4 then it will show fallback page
      
  - then in the background, next.js will statically generate the requested path HTML & JSON. this includes running getStaticProps.
  
  - when thats done the browser receives the JSON which will be used to automatically render the page. from user point of view, the page will be swapped from 
    fallback page to the full page.
    
    
    
    in my words,
      when fallback is set to true, then only paths returned from getStaticPaths are pre-rendered at build time.
      when user enters a path that is not pre rendered / not returned by getstaticpaths then it will show a fallback screen & at the same time using getStaticProps it will fetch data for that
      entered URL in the bg & once ready it will show that to user.
      
      so when user hits posts/6 for the first time it will show fallback UI until data gets fetched in the bg & when user hits same URL second time it will show actual content
      
  
   when to use?
    - when we have large number of static pages that depends on data.
    - a large e-commerce website
   
   
   
   
   
   
   
