/*
INPUT: array with aiportcodes - [HKG, AUH, BKK]
OUTPUT: "3 пересадки"
*/

export const stopsText = props => {
  if (props.length === 0) {
    return "0 пересадок";
  } else if (props.length === 1) {
    return "1 пересадка";
  }
  return `${props.length} пересадки`;
};
