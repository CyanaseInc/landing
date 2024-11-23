
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
// Animation variants
const variants = {
  hidden: { opacity: 0, y: 100, scale: 0.8, rotate: -10 },
  visible: { opacity: 1, y: 0, scale: 1, rotate: 0 },
};

// Define the interface for the use case data
interface UseCaseProps {
  title: string;
  description: string;
  
}

// Define the list of API use cases
const apiUseCases: UseCaseProps[] = [
  {
    title: "List Investment Classes",
    description:
      "Provide a wide range of investment options, such as treasury bills, bonds, and unit trusts, directly to your users through seamless API integration.",
    
  },
  {
    title: "Buy Now, Invest for Later",
    description:
      "Enable your customers to invest and save towards purchasing high-value products, like houses or vehicles, directly through your platform.",
    
  },
  {
    title: "Reduce Regulatory Burden",
    description:
      "Leverage our API to bypass the complexities of in-house regulations and operational expenses, letting you focus on delivering investment products immediately.",
    
  },
  {
    title: "Integrate Investment Change",
    description:
      "Allow customers to round up transactions and invest the spare change, turning everyday spending into opportunities for financial growth.",
    
  },
];

export const ApiFeatures = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        API{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          use-cases
        </span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {apiUseCases.map(({ title, description}, index) => (
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
                <a href="mailto:wjv@cyanase.com?subject=API usage access">
                  <Button className="bg-white border text-[#252859] border-[#252859] w-full hover:text-blue transition duration-300">
                    Request access
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