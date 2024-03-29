import React, { useState, useEffect } from "react";
import "./index.css";

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set the launch date
    const launchDate = new Date("2024-04-05T00:00:00Z");

    // Update the countdown every second
    const interval = setInterval(() => {
      const currentDate = new Date();
      const timeDifference = launchDate - currentDate;

      if (timeDifference > 0) {
        const remainingDays = Math.floor(
          timeDifference / (1000 * 60 * 60 * 24)
        );
        const remainingHours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const remainingMinutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const remainingSeconds = Math.floor(
          (timeDifference % (1000 * 60)) / 1000
        );

        setDays(remainingDays);
        setHours(remainingHours);
        setMinutes(remainingMinutes);
        setSeconds(remainingSeconds);
      } else {
        // Countdown is over, do something here if needed
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="countdown-container">
      <h1 className="title">Code Afro</h1>
      <h3 className="subtitle">
        Collaborative Platform for Developers and Programmers
      </h3>
      <div className="countdown">
        <div className="countdown-item">
          <span className="countdown-value">{days}</span>
          <span className="countdown-label">Days</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{hours}</span>
          <span className="countdown-label">Hours</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{minutes}</span>
          <span className="countdown-label">Minutes</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{seconds}</span>
          <span className="countdown-label">Seconds</span>
        </div>
      </div>
      <h2 className="launch-title">Project Launch</h2>
    </div>
  );
};

export default Countdown;
