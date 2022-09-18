import dayjs from "dayjs";

export const getRemainingTimeUntilMsTimestamp = (timestampMs) => {
  const timestampDayjs = dayjs(timestampMs);
  const nowDayjs = dayjs();

  const padWithZeros = (number, minLength) => {
    const numberString = number.toString();
    return (numberString.length >= minLength) ? numberString : "0".repeat(minLength - numberString.length) + numberString;
  }

  return timestampDayjs.isBefore(nowDayjs) ? {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  } : {
    days: timestampDayjs.diff(nowDayjs, 'days').toString(),
    hours: padWithZeros((timestampDayjs.diff(nowDayjs, 'hours') % 24), 2),
    minutes: padWithZeros((timestampDayjs.diff(nowDayjs, 'minutes') % 60), 2),
    seconds: padWithZeros((timestampDayjs.diff(nowDayjs, 'seconds') % 60), 2),
  };
}
