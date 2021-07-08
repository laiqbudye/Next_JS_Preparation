Link component can be used to navigate between different routes progrmatically.


1. homepage to blog

import Link from "next/link";

function Home(){
  return (
    <div>
      <h1> This is Home page </h1>
      <Link href="/blog">      // here href represents the route we want to navigate to
        <a> Go to Blogs </a>
      </Link>
    </div>
  );
}

export default Home;


2. homepage to product page

import Link from "next/link";

function Home(){
  return (
    <div>
      <h1> This is Home page </h1>
      <Link href="/product">      // here href represents the route we want to navigate to
        <a> Go to Products </a>
      </Link>
    </div>
  );
}

export default Home;


3. Back to root URL / Homepage

import Link from "next/link";

function Product(){
  return (
    <div>
      <h1> This is Product page </h1>
      <Link href="/">      // here "/" represents root URL
        <a> Go to root/Homepage </a>
      </Link>
    </div>
  );
}

export default Product;



4. link to dynamic routes - localhost:3000/product/11

import Link from "next/link";

function Product(){
  return (
    <div>
      <h1> This is Product page </h1>
      <Link href={`product/${productId}`}>      // here "productId" represents dynamic ID
        <a> Go to product ID </a>
      </Link>
    </div>
  );
}

export default Product;


all the above link components will push new URL in history array, so when we press back we will go to previous page.

But in case if we dont want to push URL & want to replace current URL with new one, we can use replace keyword in that case.

<Link href="/product" replace>   // here on click back button we will move to second last visited page. (replace keyword replaces current URL with new one)






# How to navigate to another page programmatically (e.g on submitting the form or clicking the button)

<button onClick={handleClick}> Place Order </button>
 
 
const router = useRouter();
function handleClick(){
  console.log("Placing your order");
  router.push("/product");      // we can also use router.replace("/product");   which will replace current URL
}





# if we try to access any route that is not handled then next js shows 404 error page by default.
if we want to show our page then we need to create 404.js file under pages folder & inside that we can create our own component.
