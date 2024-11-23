import { Button } from "./ui/button";


export const Newsletter = () => {
  

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">    
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Join Our {" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
           Community 
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
Learn how investments classes work by joining our community. We offer educational materials to help you understand how investing works.
        </p>




        <a href="https://whatsapp.com/channel/0029Va8mc7IEquiJ4UIWgT1X">
          
        <Button className="w-full">Join community</Button>
        </a>  
            
        
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};