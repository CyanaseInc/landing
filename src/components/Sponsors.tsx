interface SponsorProps {
  logo: string;
}

const sponsors: SponsorProps[] = [
  {
    logo: "/partner6.png",
  },
  {
    logo: "/partner5.svg",
  },
  {
    logo: "/partner4.png",
  },
  {
    logo: "/partner.png",
  },
  {
    logo: "/partner2.png",
  },
  {
    logo: "/partner3.png",
  },
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-center text-xl lg:text-xl font-bold mb-8 text-[#F7A92D] text-bold">
        Featured In
      </h2>
      <p className="text-center text-xl font-bold text-muted-foreground/60">
        We're on a mission to make investing cheap and accessible.
      </p>
      <a>
        <p className="text-center text-[#252859] font-bold">___Read more about our journey</p>
      </a>
      <br />
      <div className="mt-[10px] flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ logo }, index) => (
          <div key={index} className="flex items-center gap-1">
            <img width="100" src={logo} alt={logo} />
          </div>
        ))}
      </div>
    </section>
  );
};