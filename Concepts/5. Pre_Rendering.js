By Default, Next JS pre-renders each page in application.

# What is pre-render?
  - next js generates html for each page in advance instead of having it all done by client-side javascript.


in react we get js files from server & those get execute at client side and JSX get coverted to html & after that UI gets displayed on the screen.
in next js we get already generated html from server which display on screen directly, which is faster than react.


Pre-render - render in advance before sending it to browser.
pre-rendering happens by default with each next js app.


## Why pre-render?
  1. improves performance
      - in react app, you need to wait for JS to get execcute i.e fetch files from server & then render the UI
      - there is a wait time for the user
      - with pre-rendered page, the HTML is already generated and loads faster

  2. helps with SEO
      - with react app if search engine hits your page, it only sees a div tag with id equal to root
      - with next app if search engine hits your page, it will see all html elements which will help index that page
