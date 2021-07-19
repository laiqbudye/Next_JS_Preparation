in next js, all the pages are pre-rendered. but lets say if i want to fetch data from an API & based on API result i want to display HTML structure then in that case
getStaticProp comes in picture.

getStaticProp - is a async function.  
                it runs only on server-side.
                it will run at build time in production. 
                it should return an object & that object should contain a props key which is an object.


e.g

function UserList(props){    // here in props we are getting values those are returned by getStaticProps() function 
  return(
      props.users.map(user => {
        return(
          <div> 
            <p>{ user.name }</p>
            <p>{ user.email }</p>
          </div>
        )
      })
  )
}
export default UserList


export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data  = await response.json();
  console.log(data);      // it will show list of users on node terminal as it is running on server side
  
  return {
    props: {
      users: data    // here data is list of users that we fetched from an API.
    }
  }
}
