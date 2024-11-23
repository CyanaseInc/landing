
import { About } from "../components/About";
import { Cta } from "../components/Cta";
import { FAQ } from "../components/FAQ";
import { Features } from "../components/Features";

import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";

import { Newsletter } from "../components/Newsletter";
//import { Pricing } from "../components/Pricing";

//import { Services } from "../components/Services";
import { Sponsors } from "../components/Sponsors";
//import { Team } from "../components/Team";
//import { Testimonials } from "../components/Testimonials";


function Home() {
  

  
  return (
   
        <>
         
          <Hero />
          <Sponsors />
          <About />
          <HowItWorks />
          <Features />
         
          <Cta />
        { /** <Testimonials />
          <Team />
          <Pricing />**/}
          <Newsletter />
          <FAQ />

     
    </>
  );
}

export default Home;