import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  const [showBanner, setShowBanner] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className=" text-3xl md:text-6xl font-bold">
          <h1 className="moon inline">
            <span className="text-[#252859] bg-clip-text">
              Investing
            </span>{" "}
            Made Easy
          </h1>{" "}
          for{" "}
          <h2 className="moon inline">
            <span className="inline text-[#F7A92D] bg-clip-text">
              Everyone,
            </span>{" "}
            Everywhere.
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          With a mobile app and API, Cyanase makes it easy for individuals to invest and enables other fintechs to integrate investment features seamlessly.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="bg-[#F7A92D] w-full md:w-1/3">
            Create investment account
          </Button>

          <a
            rel="noreferrer noopener"
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

      {/* Modal-like Banner */}
      {showBanner && (

<div
  className="fixed top-1/2 left-1/2 transform -translate-x-1/2 mt-[12rem]
        inset-0  bg-white/80 p-4 rounded-lg h-[100px]   shadow-md  z-50 
             max-w-md w-full"
>
  <p className="text-sm text-gray-700">
    Cyanase is a financial technology company, not a bank or an investment company. 
    Investment services are provided by our partners , the licensed & regulated fund managers.
  </p>
</div>

      )}

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};