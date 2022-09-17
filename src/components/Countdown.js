import { useEffect, useState } from "react";
import "./Countdown.css"
import { getRemainingTimeUntilMsTimestamp } from "./CountdownUtils";

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({ props }) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(props);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [props]);

    function updateRemainingTime(props) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(props));
    }

    return (
        <div className="countdown-timer">
            <span>{remainingTime.days}</span>
            <span>days</span>
            <span className="two-numbers">{remainingTime.hours}</span>
            <span>hours</span>
            <span className="two-numbers">{remainingTime.minutes}</span>
            <span>minutes</span>
            <span className="two-numbers">{remainingTime.seconds}</span>
            <span>seconds</span>
        </div>
    );
}

export default CountdownTimer;