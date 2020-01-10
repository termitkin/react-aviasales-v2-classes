/*
INPUT: duration in minutes
OUTPUT: "25ч 52м"
*/

export const duration = duration => {
  const num = duration;
  const hours = num / 60;
  let rhours = Math.floor(hours);
  rhours = rhours > 9 ? rhours : `0${rhours}`;
  const minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);
  rminutes = rminutes > 9 ? rminutes : `0${rminutes}`;
  return `${rhours}ч ${rminutes}м`;
};
