export const Footer = () => {
  const footerLinks = [
    {
      title: "Platform",
      links: [
        { name: "API", url: "/api" },
        { name: "Sectors", url: "/sectors" },
        { name: "Goal investments", url: "goal" },
           { name: "Investment products", url: "/products" },
                { name: "Contact us", url: "contact" }
      ]
    },

    {
      title: "Legal",
      links: [
        { name: "Privacy policy", url: "https://www.cyanase.com/savers/registration/policies.html" },
        { name: "Terms of use", url: "#" },
      ]
    },
    {
      title: "Connect with us",
      links: [
        { name: "Twitter", url: "https://x.com/cyanaseinc" },
        { name: "LinkedIn", url: "https://ug.linkedin.com/company/cyanase" },
        { name: "Facebook", url: "https://facebook.com/cyanaseInc/" },
        { name: "WhatsApp", url: "https://wa.me/256705640852" },
      ]
    }
  ];

  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <img width="150" src="/logh.png" alt="Cyanase Logo" />
          </a>
        </div>

        {footerLinks.map((section) => (
          <div key={section.title} className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">{section.title}</h3>
            {section.links.map((link) => (
              <div key={link.name}>
                <a
                  rel="noreferrer noopener"
                  href={link.url}
                  className="opacity-60 hover:opacity-100"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        ))}
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; All rights reserved{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            className="text-primary transition-all border-primary hover:border-b-2"
            href="https://cyanase.com"  // Replace with your actual link
          >
            Cyanase
          </a>
        </h3>
      </section>
    </footer>
  );
};