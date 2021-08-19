lets say we have two components Header & footer & we want them to display on each n every page of our application.

so to achieve this behaviour we need to import them in _app.js file & use them inside render method.


_app.js

import Header from './components/Header';
import Footer from './components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />                       // here we are setting header on each n every page of app
      <Component {...pageProps} />
      <Footer />                      //  here we are setting footer on each n every page of app
    </>
  )
}


export default MyApp;



Now lets say for about page i dont want header to display. 
so to achieve that behaviour 

about.js

import Footer from './components/Footer';

function About() {
  return <h1 className="content">About</h1>
}

export default About;


About.getLayout  = function PageLayout(page) {   // receives page automatically which points to about component/page
   return (
    <>
     {page}
     <Footer />
    </>
   )
}


now make changes in _app.js file,
  
import Header from './components/Header';
import Footer from './components/Footer';

function MyApp({ Component, pageProps }) {
  
  if(Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  
  return (
    <>
      <Header />                       // here we are setting header on each n every page of app
      <Component {...pageProps} />
      <Footer />                      //  here we are setting footer on each n every page of app
    </>
  )
}


export default MyApp;
