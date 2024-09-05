import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "antd";
import "./timeLeft.css";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-09-10") - +new Date();
    let timeLeft = {};

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
    <div className="countdown">
      <Row justify="center">
        <Col>
          <Card className="timer-card">
            <div className="timer">
              <div className="time-section">
                <div className="number">{timeLeft.days || "00"}</div>
                <div className="text">Day</div>
              </div>
              <div className="time-section">
                <div className="number">{timeLeft.hours || "00"}</div>
                <div className="text">Hour</div>
              </div>
              <div className="time-section">
                <div className="number">{timeLeft.minutes || "00"}</div>
                <div className="text">Minute</div>
              </div>
              <div className="time-section">
                <div className="number">{timeLeft.seconds || "00"}</div>
                <div className="text">Second</div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CountdownTimer;
