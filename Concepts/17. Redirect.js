if we want to redirect user to different page/location then redirect comes in picture.

suppose user has bookmarked my site's URL 'old-post/postId' & in new version of my app i have updated that path to 'new-post/postId'.
so whenever user hits my site from that bookmark it is not going to load. 
so to handle such cases redirect comes in picture.

to fix above problem,
  
  next.config.js

    module.exports = {
      reactStrictMode: true,
      redirects: async () => {
        return [
          {
            source: '/about',
            destination: '/',
            permanent: false,    //false => this redirect is not permenant, status code = 307 (can be used when server down)
                                 //true => this redirect is permenant, status code = 308 (can be used when page url has been changed permanently)
          }
        ]
      }
    }


with above setting, whenever user enter 'localhost:3000/about' it will get redirected to 'localhost:3000/'.
