import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface CountdownTimerProps {
  expiredTime: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ expiredTime }) => {
  const calculateTimeLeft = (): number => {
    const difference = new Date(expiredTime).getTime() - new Date().getTime();
    return difference > 0 ? Math.floor(difference / 1000) : 0;
  };
  const [timeLeft, setTimeLeft] = useState<number>(calculateTimeLeft);
  const router = useRouter();

  useEffect(() => {
    if (timeLeft === 0) {
      router.push("/payment?RE");
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft(() => {
        const newTime = calculateTimeLeft();
        return newTime <= 0 ? 0 : newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return <span>{formatTime(timeLeft)}</span>;
};

export default CountdownTimer;
