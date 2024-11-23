export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "2.7K+",
      description: "Users",
    },
    {
      quantity: "+500k",
      description: "Deposits",
    },
    {
      quantity: "30+",
      description: "Investment products",
    },
    {
      quantity: "+15%",
      description: "Return on investment",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: statsProps) => (
          <div
            key={description}
            className="space-y-2 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold ">{quantity}</h2>
            <p className="text-md text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
