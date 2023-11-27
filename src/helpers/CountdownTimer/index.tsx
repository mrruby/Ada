import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

const TimeSegment: React.FC<{ label: string; value: number }> = ({ label, value }) => (
  <div className='flex flex-col items-center font-bold text-adaBase'>
    {value} <p className='font-medium'>{label}</p>
  </div>
);

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className='flex w-full gap-8 lg:min-w-[600px] justify-around bg-ada-light-pink px-4 py-2'>
      <TimeSegment label="dni" value={timeLeft.days} />
      <TimeSegment label="godzin" value={timeLeft.hours} />
      <TimeSegment label="minut" value={timeLeft.minutes} />
      <TimeSegment label="sekund" value={timeLeft.seconds} />
    </div>
  );
};

export default CountdownTimer;
