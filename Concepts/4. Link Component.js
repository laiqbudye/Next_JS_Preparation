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


