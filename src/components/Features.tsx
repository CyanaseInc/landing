import { Badge } from "./ui/badge";
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

interface FeatureProps {
  title: string;
  description: string;
  hrefz: string;
}

const features: FeatureProps[] = [
  {
    title: "Fund Managers",
    description:
      "We collaborate with licensed fund managers to offer affordable and accessible investment products, extending opportunities to underserved markets.",
    hrefz: '/sector',
  },
  {
    title: "SACCOs & Investment Clubs",
    description:
      "Partnering with SACCOs and investment clubs, we provide easy access to investment products, empowering group members to grow their wealth collectively.",
    hrefz: '/sector',
  },
  {
    title: "Financial Inclusion",
    description:
      "In collaboration with organizations promoting financial inclusion, we work to make financial markets accessible to all most especially women, particularly those traditionally underserved.",
    hrefz: 'include',
  },
  {
    title: "Students",
    description:
      "Our platform enables parents to invest in their children’s future, providing them with a solid financial foundation upon graduation.",
    hrefz: "students",
  },
];

const featureList: string[] = [
  "Goal-Based Investing",
  "API Integration for fintechs and platforms",
  "Diverse Investment Classes",
  "Licensed Fund Managers",
  "Real-Time Investment Tracking",
  "Automated Transactions",
 
  "Secure Transactions",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
     <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>
<p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      We're not just about investing; we collaborate with various organizations to drive digital financial inclusion, empowering communities to access and benefit from financial services in the digital age.
      </p>


    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map(({ title, description, hrefz }: FeatureProps, index) => (
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
  <a href={hrefz}>
      <Button className="bg-white boder text-[#252859] border border-[#252859] w-[100%]  hover:text-blue transition duration-300">
            Learn more
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
