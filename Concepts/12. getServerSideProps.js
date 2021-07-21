getServerSideProps - 
  - this is very similar to getStaticProps().
  - it runs at request time.
  - it should return an object which is having props as a key.
  - it is allowed only in a page & cant be run from a regular component file.
  e.g

function newArticleList(props) {     // whatever we are returning from getServerSideProps will be passed here as props
  return (
    <>
      <h1> List of Articles </h1>
      {
        props.articles.map(article => {
           return (
              <div key= {article.id}> 
                <h2> {article.title}  | {article.category}</h2>
              </div> 
           )
        })
      }
    </>
  )
}



export async function getServerSideProps() {
  const response = await fetch('some API endpoint')
  const data = await response.json();
  
  return {
    props: {
      articles: data
    }
  }
}



so when user hit http://localhost:3000/articles then above getServerSideProps function will get execute & it will return an object which we will get as a prop in 
our function. then based on that data HTML will get generated for that page & sent back to the browser.

this process will be time taking as compared to static site generation, so use it wisely.



------------------------------------------------------------------------------------------------------------

example to fetch data with dynamic category

export async function getServerSideProps(context) {
  const { params: { category }} = context;
  const response = await fetch(`http://localhost:8000/news?category=${category}`);
  const data = await response.json();
  
  return {
    props: {
      articles: data,
      category
    }
  }
}



here inside context argument we also get an access to incoming request & response

context has 
    params, req, res, query (which is an object containing key value pair of query params passed in URL)
-------------------------------------------------------------------------------------------------------------
  
  
