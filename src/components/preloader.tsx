// components/Preloader.tsx
import { useState, useEffect } from "react";


export const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate a 2-second loading time
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <>
      {loading && (
        <div className="preloader">
          <div className="spinner"></div>
        </div>
      )}
    </>
  );
};