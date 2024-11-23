import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is Cyanase, and how does it help people invest?",
    answer:
      "Cyanase is a fintech platform that makes investing accessible by allowing individuals and businesses to easily integrate investment opportunities into their services. We provide tools that enable users to invest in various financial products, with a focus on supporting developing markets.",
    value: "item-1",
  },
  {
    question: "How can I start investing through Cyanase?",
    answer:
      "To start investing with Cyanase, simply sign up on our platform, create an account, and choose the investment options that suit your goals. You can then make deposits through supported payment methods and begin your investment journey.",
    value: "item-2",
  },
  {
    question: "Is my money safe with Cyanase, and what security measures are in place?",
    answer:
      "Yes, your money is safe with Cyanase. We implement industry-standard security measures, including encryption, secure payment gateways, and regular audits to protect your data and transactions. We prioritize your security and compliance with regulatory standards.",
    value: "item-3",
  },
  {
    question: "How do businesses integrate Cyanase’s API into their platforms?",
    answer:
      "Businesses can integrate Cyanase’s API by following our detailed documentation and using the provided SDK. Our technical support team is available to assist during the integration process. Once integrated, businesses can offer investment options to their users seamlessly.",
    value: "item-4",
  },
  {
    question: "How does goal-based investment work on Cyanase?",
    answer:
      "Goal-based investing on Cyanase allows you to set specific financial goals (such as saving for a car, education, or retirement) and invest towards those targets. You can define your goal amount, time frame, and risk preferences, and Cyanase helps you manage and track your investments to meet your objectives.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          
          href="/contact"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
