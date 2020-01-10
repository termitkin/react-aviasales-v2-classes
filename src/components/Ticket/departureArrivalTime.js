/*
INPUT: date string, duration int
OUTPUT: "10:36 – 18:00" (Moscow time UTC+3)
*/

export const departureArrivalTime = (dateFromProps, durat) => {
  const date = new Date(dateFromProps);
  date.setTime(date.getTime() + 3 * 60 * 60 * 1000);
  const datePlusDuration = date.getTime() + durat * 60000;

  let departureTimeHours =
    date.getUTCHours() > 9 ? date.getUTCHours() : `0${date.getUTCHours()}`;
  let departureTimeMinutes =
    date.getUTCMinutes() > 9
      ? date.getUTCMinutes()
      : `0${date.getUTCMinutes()}`;
  const departureTime = `${departureTimeHours}:${departureTimeMinutes}`;

  let ArrivalTimeHours =
    new Date(datePlusDuration).getUTCHours() > 9
      ? new Date(datePlusDuration).getUTCHours()
      : `0${new Date(datePlusDuration).getUTCHours()}`;
  let ArrivalTimeMinutes =
    new Date(datePlusDuration).getUTCMinutes() > 9
      ? new Date(datePlusDuration).getUTCMinutes()
      : `0${new Date(datePlusDuration).getUTCMinutes()}`;
  const ArrivalTime = `${ArrivalTimeHours}:${ArrivalTimeMinutes}`;

  const result = `${departureTime} – ${ArrivalTime}`;

  return result;
};
