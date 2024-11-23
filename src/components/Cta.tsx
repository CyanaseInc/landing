import { useState } from "react";
import { Button } from "./ui/button";

// Modal Props Interface
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

// Modal Component with types for props
const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

// InvestmentCalculator Props Interface
interface InvestmentCalculatorProps {
  handleCloseModal: () => void;
}

const InvestmentCalculator = ({ handleCloseModal }: InvestmentCalculatorProps) => {
  const [investmentAmount, setInvestmentAmount] = useState<number | string>('');
  const [annualReturnRate, setAnnualReturnRate] = useState<number | string>('');
  const [investmentDuration, setInvestmentDuration] = useState<number | string>('');
  const [futureValue, setFutureValue] = useState<string | null>(null);

  const calculateFutureValue = () => {
    // Convert values to numbers before performing calculations
    const investmentAmountNum = Number(investmentAmount);
    const annualReturnRateNum = Number(annualReturnRate);
    const investmentDurationNum = Number(investmentDuration);

    const totalAmount =
      investmentAmountNum * Math.pow(1 + annualReturnRateNum / 100, investmentDurationNum);

    const amv = totalAmount.toFixed(1);  // Fix the decimal places first
    setFutureValue(Number(amv).toLocaleString());  // Then format as a localized string
  };

  return (
    <div>
      <button onClick={handleCloseModal} className="top-2 right-2 text-gray-500 hover:text-gray-700">
        X
      </button>
      <h2 className="text-2xl font-bold mb-4">Investment Calculator</h2>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Investment Amount UGX:</label>
        <input
          type="number"
          value={investmentAmount}
          onChange={(e) => setInvestmentAmount(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter amount"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Annual Return Rate (%):</label>
        <input
          type="number"
          value={annualReturnRate}
          onChange={(e) => setAnnualReturnRate(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter rate"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Investment Duration (Years):</label>
        <input
          type="number"
          value={investmentDuration}
          onChange={(e) => setInvestmentDuration(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter duration"
        />
      </div>
      <button
        onClick={calculateFutureValue}
        className="w-full bg-primary text-white p-2 rounded hover:bg-primary/80"
      >
        Calculate Future Value
      </button>
      {futureValue !== null && (
        <div className="mt-4 text-lg text-[#252859] font-semibold">
          Future Value: UGX {futureValue}
        </div>
      )}
    </div>
  );
};

// CTA Component
export const Cta = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Try our
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Investment calculator{" "}
            </span>
            to see how much you would have over time
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Calculate your potential returns and plan your investments effectively with our easy-to-use tool.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto" onClick={handleOpenModal}>
            Investment Calculator
          </Button>
        </div>
      </div>

      {/* Modal with Calculator */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <InvestmentCalculator handleCloseModal={handleCloseModal} />
      </Modal>
    </section>
  );
};