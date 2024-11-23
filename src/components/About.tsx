import { Statistics } from "./Statistics";


export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="align-center px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
                <div className="stage">
        <div className="body">
          <div className="top">
            <div className="light"></div>
            <div className="antenna"></div>
            <div className="base2"></div>
            <div className="base1"></div>
          </div>
          <div className="glass">
            <div className="reflection"></div>
          </div>

          <div className="boster bosterL">
            <p>  </p>
          </div>
          <div className="boster bosterR"> <p> </p></div>
          <div className="ring">
            <div className="s1"></div>
            <div className="s1"></div>
            <div className="s1"></div>
            <div className="s1"></div>
            <div className="s1"></div>
            <div className="s1"></div>
            <div className="s1"></div>
          </div>
          <div className="fire">
            <div className="flame h1"></div>
            <div className="flame h2"></div>
            <div className="flame h3"></div>
            <div className="flame h4"></div>
            <div className="flame h5"></div>
          </div>
        </div>
      </div>
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  What {" "}
                </span>
                we do
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                At Cyanase, we simplify access to global investment opportunities by aggregating diverse asset classes from different fund managers into one platform. With our mobile app, individuals can easily download and start investing, while fintechs can integrate our API to offer investment services in their apps without the hassle of managing regulations and compliance.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
