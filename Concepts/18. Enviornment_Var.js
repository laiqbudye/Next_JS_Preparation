nextJs has in-built support for enviornment variables

we just need to create a .env.local file & add variables in that file

e.g
.env.local
  
  DB_USER = LAIQ
  DB_PASSWORD = PASSWORD

to access these variables inside getStaticProps or getStaticPaths, we need to use process.env.DB_USER & process.env.DB_PASSWORD


If we want to use an env variable inside component or in render method then we need to prefix that var with NEXT_ as normal vars wont be accessible inside component or in return or render method.

e.g
.env.local
  
  DB_USER = LAIQ
  DB_PASSWORD = PASSWORD
  NEXT_PUBLIC_ANALYTICS_ID = 1234;

to access this we can use it as console.log("ID is:- ", NEXT_PUBLIC_ANALYTICS_ID);
