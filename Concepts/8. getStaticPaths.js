in the previous example of getStaticProps(), we have passed dynamic post id in the URL but next js wants us to mention what will be the expected values for that post id.

so to mention those values/paths getStaticPaths comes in picture.

getStaticPaths informs nextjs to pre-render posts by dynamically fetching the post IDS's

1. getStaticPaths - 
  - it is a function that runs on server side.
  - it should return an object with paths key which contains array of objects.
  
  export async function getStaticPaths() {
    return {                                           // returning an obj
      paths: [
        {
          params: {postId: '1'}
        },
        {
          params: {postId: '2'}
        },
        {
          params: {postId: '3'}
        }
      ], 
      fallback: false
    }
  }



the above approach is useful for smaller applications where we have only 3 4 pages, but imagine if we have 1000 postID's then in that case the above approach is not feasible.

to handle that scenario we can make request to post api & can get number of posts & loop over on that array.
e.g

async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = response.json();
  
  const paths = data.map(post => {
    return {
      params: {
        postId: `${post.id}`        // this approach is useful when we dont know how many posts  are there or no. of posts are large
      }
    }
  })
}

getStaticPaths informs nextjs to pre-render posts by dynamically fetching the post IDS's


------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------
  
  IMP NOTE:- 
    
    lets say there is one application, & on homepage i am showing 5 different posts. clicking on a post will open individual & more detailed post.
    
    so when my app loads for the first time in network tab we can see 1.json, 2.json, 3.json.... 5.json (this is data for showing induvidual post)

    so when user click on any of the post it wont make any new request & uses previously fetched JSON data to show an individual post.
    
-----------------------------------------------------------------------------------------------
    
    
    
    
    
    
    
    
    
    
