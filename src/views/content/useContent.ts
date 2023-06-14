import { useState, useEffect } from "react";

export const useContent = () => {
  const duration = 1500;

  const [timeLeft, setTimeLeft] = useState(duration);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval: any = null;

    if (running && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, timeLeft]);

  const handleOnStart = () => {
    setRunning(true);
  };

  const handleOnStop = () => {
    setRunning(false);
  };

  const handleOnReset = () => {
    setTimeLeft(duration);
    setRunning(false);
  };

  return { handleOnStart, handleOnReset, handleOnStop, timeLeft };
};
