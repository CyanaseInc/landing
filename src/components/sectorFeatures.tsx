import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 100, scale: 0.8, rotate: -10 },
  visible: { opacity: 1, y: 0, scale: 1, rotate: 0 },
};

interface PartnerProps {
  title: string;
  description: string;
  
}

const whoWeWorkWith: PartnerProps[] = [
  {
    title: "Fund Managers",
    description:
      "We collaborate with licensed fund managers to create affordable and accessible investment products, extending opportunities to underserved markets.",
    
  },
  {
    title: "Fintechs & Banks",
    description:
      "We partner with fintech companies and banks to integrate our API, enabling seamless access to investment products on their platforms.",
    
  },
  {
    title: "Institutions Promoting Financial Inclusion",
    description:
      "We work with organizations dedicated to fostering financial inclusion to ensure financial markets are accessible to traditionally underserved communities.",
   
  },
  {
    title: "SACCO Groups",
    description:
      "By partnering with SACCO groups, we provide members with easy access to investment products, empowering them to grow their collective wealth.",
    
  },
  {
    title: "Investment Clubs",
    description:
      "We collaborate with investment clubs to offer tailored solutions, enabling members to pool resources and achieve their financial goals together.",
    
  },
  {
    title: "Schools & Students",
    description:
      "Our platform supports schools and parents in helping students invest for their financial future, providing them with a strong foundation upon graduation.",
    
  },
  {
    title: "High-End Product Businesses",
    description:
      "We partner with businesses that sell high-end products like houses and vehicles, making it easier for people to invest and acquire these assets through structured financing and investment solutions.",
   
  },
];

export const SectorFeatures = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Here's{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          who we work with
        </span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {whoWeWorkWith.map(({ title, description }: PartnerProps, index) => (
          <motion.div
            key={title}
            className="bg-white"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the card is in view
            transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger effect
          >
            <Card>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent>{description}</CardContent>

              <CardFooter>
                <a href="mailto:wjv@cyanase.com?subject=Partnership">
                  <Button className="bg-white border text-[#252859] border-[#252859] w-full hover:text-blue transition duration-300">
                    Partner with us
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};