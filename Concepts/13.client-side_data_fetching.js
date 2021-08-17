Next JS natively provides a hook to fetch data at client side.
We can use useSWR hook to fetch data.


import useSWR from 'swr';

function DashboardDataFetch () {
  useSwr('dashboard', async () => {                      // takes first arg as unique key, second is a function from which we can fetch the data
    const response = await fetch('http://localhost__URL_of_API);
    const data = await response.json();
    return data;
  })
}

--------------------------------------------------------------------

In simpler form, we can write above example as below,
  
import useSWR from 'swr';

const fetcher = async () => {
     const response = await fetch('http://localhost__URL_of_API);
     const data = await response.json();
     return data;  
}
function DashboardDataFetch () {
  const {data, error} = useSwr('dashboard',fetcher);      // this hook returns two values - data & error
  
  if(error)   return "An error has occured"
  if(!data)   return "Loading..."
  
  return (
    <div>
      <h2> {data.posts} </h2>
      <h2> {data.likes} </h2>
    </div>
  )
}


Benefits:-
  1. with this approach we dont need to play with react useEffect, then setting the loading flag to true or false... all these will be taken care by useSwr
  2. when data gets updated on backend then we dont need to refresh our page to see latest changes, it will done automatically
