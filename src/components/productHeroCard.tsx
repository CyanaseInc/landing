import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const investments = [
  {
    title: "Treasury Bills",
    description: "Low-risk investment with guaranteed returns.",
    stats: 5,
    color: "#FF6F61",
    graph: (
      <svg
        className="graph-svg"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#FF6F61"
          strokeWidth="10"
          strokeDasharray="282.74"
          strokeDashoffset="141.37"
          className="animated-circle"
        />
        <text
          x="50"
          y="55"
          textAnchor="middle"
          fill="#FF6F61"
          fontSize="14"
          fontWeight="bold"
          className="graph-text"
        >
          +5%
        </text>
      </svg>
    ),
  },
  {
    title: "Real Estate",
    description: "Invest in properties and grow your wealth.",
    stats: 12,
    color: "#6A7FDB",
    graph: (
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="20"
          y="40"
          width="20"
          height="40"
          fill="#6A7FDB"
          rx="2"
        />
        <rect
          x="50"
          y="30"
          width="20"
          height="50"
          fill="#6A7FDB"
          rx="2"
        />
        <rect
          x="70"
          y="20"
          width="20"
          height="60"
          fill="#6A7FDB"
          rx="2"
        />
      </svg>
    ),
  },
  {
    title: "Stocks",
    description: "High-risk, high-reward market investments.",
    stats: 20,
    color: "#F8B400",
    graph: (
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline
          points="10,90 30,70 50,80 70,40 90,20"
          fill="none"
          stroke="#F8B400"
          strokeWidth="4"
        />
        <circle cx="90" cy="20" r="5" fill="#F8B400" />
      </svg>
    ),
  },
];

export const HeroCards = () => {
  return (
    <div className="mt-[80px] herobg hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      <div className="hero-section">
        <div className="investment-cards">
          {investments.map((investment, index) => (
            <motion.div
              className="investment-card"
              key={index}
              style={{ borderColor: investment.color }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="card-header">
                <div className="card-graph">{investment.graph}</div>
                <h2 className="card-title">{investment.title}</h2>
              </div>
              <p className="card-description">{investment.description}</p>
              <AnimatedStats target={investment.stats} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AnimatedStats: React.FC<{ target: number }> = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 50);

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev + increment >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + increment;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <span className="card-stats text-xl font-bold text-gray-800">
      +{count.toFixed(0)}%
    </span>
  );
};