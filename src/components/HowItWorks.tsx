import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, ChartIcon, PlaneIcon, GiftIcon } from "../components/Icons";

// Updated FeatureProps interface with `learnmore` property
interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
  learnmore: string; // Added learnmore property
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Investment classes",
    description:
      "We offer a range of investment classes to suit different financial goals and risk preferences. Whether you're looking to invest in stocks, bonds, or mutual funds, our platform provides access to diverse options that cater to both conservative and aggressive strategies. Each investment class is designed to help you build a balanced portfolio, ensuring that your financial objectives are met with the right mix of growth and stability.",
    learnmore: "/class",
  },
  {
    icon: <PlaneIcon />,
    title: "API",
    description:
      "Our API enables seamless integration of investment features into your platform, allowing fintechs, e-commerce sites, and social networks to offer goal-based investing without the complexity of in-house management. With secure, scalable endpoints, our API simplifies the process of embedding investment services, providing real-time data, automated transactions, and personalized portfolio management, all while ensuring regulatory compliance.",
    learnmore: "/api",
  },
  {
    icon: <GiftIcon />,
    title: "Goal-based investing",
    description:
      "Our Goal-Based Investing helps you invest towards specific financial goals like buying a home or saving for retirement. We provide personalized plans based on your goals and risk level, allowing you to track your progress and adjust contributions as needed.",
    learnmore: "/goals",
  },
  {
    icon: <ChartIcon />,
    title: "Fund managers",
    description:
      "We partner with licensed fund managers to provide expertly managed investment portfolios. These professionals are regulated and bring years of experience to ensure your investments are in safe hands. By leveraging their expertise, we offer diversified portfolios tailored to your goals, while they actively monitor and adjust your investments to maximize returns and minimize risks. With trusted fund managers at the helm, you can confidently grow your wealth with peace of mind",
    learnmore: "/fund",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Our{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Product Offering{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Unlock a world of smart, seamless investing with Cyanase—where we simplify financial growth through cutting-edge solutions tailored to your needs. Explore our services below:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description, learnmore }: FeatureProps) => (
          <Card
            key={title} // This key must be unique, and using title works here since it's guaranteed to be unique
            className="bg-white"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {description}
              {/* Optionally, you can add a "Learn More" link */}
              <a href={learnmore} className="text-primary underline mt-2 block">Learn More</a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};