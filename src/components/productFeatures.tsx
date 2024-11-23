
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

// Define the interface for investment classes
interface InvestmentClassProps {
  title: string;
  description: string;
 
}

// Define the list of investment classes
const investmentClasses: InvestmentClassProps[] = [
  {
    title: "Equities",
    description:
      "Invest in company stocks to achieve long-term growth. Equities represent ownership in a company, allowing you to benefit from its growth and profits.",
    
  },
  {
    title: "Fixed Income",
    description:
      "Enjoy stable and predictable returns by investing in fixed-income instruments like Treasury Bills and Bonds, which provide consistent income and lower risk.",
    
  },
  {
    title: "Real Estate",
    description:
      "Diversify your portfolio with real estate investments, offering opportunities for consistent rental income and long-term value appreciation.",
    
  },
  {
    title: "Commodities",
    description:
      "Invest in physical goods like gold, oil, and agricultural products to hedge against inflation and diversify your investment portfolio.",
    
  },
  {
    title: "Mutual Funds",
    description:
      "Pool your money with other investors to access a professionally managed portfolio of stocks, bonds, and other assets, including Unit Trusts for diversified investments.",
    
  },
  {
    title: "Exchange-Traded Funds (ETFs)",
    description:
      "Trade diversified portfolios of assets like stocks and bonds on the stock exchange, combining the benefits of mutual funds and individual stock investments.",
   
  },
  {
    title: "Alternative Investments",
    description:
      "Explore opportunities like private equity, hedge funds, and venture capital to achieve high returns, often with a higher risk-reward profile.",
    
  },
];

export const ProductFeatures = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Local and{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Global products
        </span>
      </h2>

      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        We partner with fund managers around the globe to make investment products cheap and easy to access for everyone everywhere
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {investmentClasses.map(({ title, description}: InvestmentClassProps, index) => (
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
                <a href="https://auth.cyanase.com">
                  <Button className="bg-white border text-[#252859] border-[#252859] w-full hover:text-blue transition duration-300">
                    Invest now
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