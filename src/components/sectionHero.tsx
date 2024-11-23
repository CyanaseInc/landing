
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const SectorHero = () => {
  

  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className=" text-3xl md:text-6xl font-bold">
          <h1 className="moon inline">
            <span className="text-[#252859] bg-clip-text">
              Our 
            </span>{" "}
           
          </h1>{" "}
          {" "}
          <h2 className="moon inline">
            <span className="inline text-[#F7A92D] bg-clip-text">
              Partners
            </span>{" "}
         
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          We work with a wide range of institutions to make investments products easily accessible to the underserved markets
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="bg-[#F7A92D] w-full md:w-1/3">
            Create investment account
          </Button>

          <a
            href="mailto:wjv@cyanase.com?subject=Partnership"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Partner with us
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>


      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};