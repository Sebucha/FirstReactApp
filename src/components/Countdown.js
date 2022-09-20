import { useEffect, useState } from "react";
import useCountDown from "react-countdown-hook";
import "./Countdown.css"
import { getRemainingTimeUntilMsTimestamp } from "./CountdownUtils";

const defaultRemainingTime = {
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
}

/**
 * 
 * @param {Date} date - string formatted date we want to count to 
 * @returns {JSX} - visual representation of the counter
 */
const CountdownTimer = ({ date }) => {
  const [timeLeft, { start }] = useCountDown(Math.floor(Math.abs(date - new Date())));
  const [formattedTime, setFormattedTime] = useState(defaultRemainingTime)

  useEffect(() => {
    start()
  })

  useEffect(() => {
    setFormattedTime(getRemainingTimeUntilMsTimestamp(date))
  }, [timeLeft, date])

  return (
    <>
      <div className="countdown-timer">
        {/* <span>{formattedTime.days}</span>
        <span>days</span>
        <span>{formattedTime.hours}</span>
        <span>hours</span>
        <span>{formattedTime.minutes}</span>
        <span>minutes</span>
        <span>{formattedTime.seconds}</span>
        <span>seconds</span> */}
        {/* OR */}
        {Object.entries(formattedTime).map(el => <div key={el[0]}>
          <span>{el[1]}</span>{" "}
          <span className="capitalized">{el[0]}</span>
        </div>)}
      </div>
    </>
  );
}

export default CountdownTimer;