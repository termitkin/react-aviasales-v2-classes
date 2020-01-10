/*
INPUT: int price - 83733
OUTPUT: "83 733 P"
*/

export const priceConverter = (price, currency, currencyRates) => {
  if (currency === "usd") {
    price = price / currencyRates.usd;
    price = Number(price).toFixed(2);
    price = `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} $`;
  } else if (currency === "eur") {
    price = price / currencyRates.eur;
    price = Number(price).toFixed(2);
    price = `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} €`;
  } else {
    price = `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`;
  }
  return price;
};
