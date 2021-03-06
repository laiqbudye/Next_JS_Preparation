As NextJS is a framework it has native support for API's. It allows to create restful API's without having any external server or configuration.

To create an API- 
  - create a 'api' folder under pages folder
  - inside api folder we can add subfolders or direct file,
  - to access that api we need to hit that filename from browser
  
 
  
HANDLE A GET REQUEST
example
  filename:- pages/api/comments/index.js
   
   export default function handler(req, res) {
      res.status(200).json([{id: 1, data: 'hello world'}, {id: 2, data: 'this is beautiful'}])
   }


so to access this api endpoint, we need to hit,
  http:localhost:3000/api/comments     => it will return     [{id: 1, data: 'hello world'}, {id: 2, data: 'this is beautiful'}]


function to get data programatically,
  
  const fetchComments = async () => {
    const response = await fetch('/api/comments');         // get request
    const data = await response.json();
  }


--------------------------------------------------------------------------------------------------------------------------------------------

HANDLE A POST REQUEST

  filename:- pages/api/comments/index.js

   export default function handler(req, res) {
     if(req.method === 'GET') {
        res.status(200).json([{id: 1, data: 'hello world'}, {id: 2, data: 'this is beautiful'}])
     } else if (req.method === 'POST') {
        const newComment = req.body.comment;
        existingComments.push(newComment);
       res.status(201).json(newComment);
     }
   }



function to post data programatically,
  
  const submitComment = async () => {
    const response = await fetch('/api/comments', {        // post request
        method: 'POST',
        body: JSON.stringify({ comment: {id: 3, data: 'new comment'} }),
        headers: {
          'Content-Type': 'application/json'
        }
    });     
    
    const data = await response.json();
  }



--------------------------------------------------------------------------------------------------------------------------------------------

HANDLING A DELETE REQUEST

  filename:- pages/api/comments/[commentId].js                   // here commentId will be dynamic

   export default function handler(req, res) {
     const { commentId } = req.query;
     
     if(req.method === 'GET') {
        res.status(200).json([{id: 1, data: 'hello world'}, {id: 2, data: 'this is beautiful'}])
     } else if (req.method === 'DELETE') {
        const deletedComment = comments.find((comment) => comment.id === parseInt(commenId));    // finding comment to be deleted
       
       const index = comments.findIndex((comment) => comment.id === parseInt(commenId));          // finding index of comment
       
       comments.splice(index, 1);
       
       res.status(200).json(deletedComment);
     }
   }



function to delete data programatically,
  
  const deleteComment = async () => {
    const response = await fetch('/api/comments/${commentId}', {        // post request
        method: 'DELETE'
    });     
    
    const data = await response.json();
  }


  
  -------------------------------------------------------------------------------------------------------------------------
    
   
CATCH ALL API ROUTES

  to catch all API routes we can make a file as
    
    pages/api/[...params].js                       // this route will catch all the unhandled routes
