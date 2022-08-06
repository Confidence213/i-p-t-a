export const formatPrice = (price: number, coeff: number): string => {
  const result = [];
  const recalculatedPrice = Math.round(price * coeff);
  const priceNums = String(recalculatedPrice).split("");

  if (priceNums.length > 3) {
    for (let i = priceNums.length; i > 0; i--) {
      result.push(priceNums[i - 1]);

      if ((i % 3 === 0) && (i !== 0)) {
        result.push(" ");
      }
    }
  } else {
    for (let i = priceNums.length; i > 0; i--) {
      result.push(priceNums[i - 1]);
    }
  }

  return result.reverse().join("");
};

export const getCorrectSpelling = (num: number): string => {
  switch (num % 20) {
    case 1:
      return "пересадка";

    case 2:
      return "пересадки";

    case 3:
      return "пересадки";

    case 4:
      return "пересадки";

    default:
      return "пересадок";
  }
};

export const recalculate = async (currency: string): Promise<number> => {
  let data = 0;

  await fetch(`https://api.exchangerate.host/convert?from=RUB&to=${currency.toUpperCase()}`)
    .then(data => data.json())
    .then(response => {
      data = response.result;
    })
    .catch(err => {
      throw new Error(err);
    });

  return data;
};
