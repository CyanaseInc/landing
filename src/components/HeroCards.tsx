

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check} from "lucide-react";
import { LightBulbIcon } from "./Icons";


export const HeroCards = () => {
  return (
    <div className="herobg hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}


      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center">
<div className="containerphone">
  <div className="phone">
    <div className="app">
      <header>
        <div className="toolbar">
    
          <div className="title">App</div>

        </div>
      </header>
      <div className="contentphone">
        <div className="loader">
          <svg className="filter" version="1.1">
            <defs>
              <filter id="gooeyness">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -12" result="gooeyness" />
                <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
              </filter>
            </defs>
          </svg>
<img width="200" src="/shot.jpg"/>
        </div>
      </div>
      <footer></footer>
    </div>
    <div className="statusbar">
      <div className="clock">12:39</div>
      <div className="battery">
        <div></div>
        <div></div>
      </div>
    </div>
    <div className="notch">
      <div className="camera"></div>
      <div className="speaker"></div>
    </div>
    <div className="buttons">
      <span className="power"></span>
      <span className="sleep"></span>
      <span className="up"></span>
      <span className="down"></span>
    </div>
  </div>
 
</div>
      </Card>

      {/* Pricing */}
      <Card className="bg-card absolute top-[150px] left-[50px] w-41 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Built for various sectors

          </CardTitle>
          <div>
          </div>
        </CardHeader>

        <CardContent>

        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Fund managers","Investment clubs","Sacco", "Fintechs"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="bg-card absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Safe investing</CardTitle>
            <CardDescription className="text-md mt-2">
            Download our app and access a wide range of investment products like Treasury bills and bonds.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
