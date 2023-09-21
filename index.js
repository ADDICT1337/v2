import _ from 'lodash';

export default (content) => {
  // #1
  const lines = content.split(`\n`).slice(1);
  const linesCount = lines.length;
  console.log(`Count: ${linesCount}`);

    // #2
    const currencySortABC = lines.map(element => {
      const currency = element.split(`;`)[3];
      return currency;
    });
    const currencySort = [...new Set(currencySortABC)].sort().join(', ');
    console.log(`Currency codes: ${currencySort}`);

  // #3
  let minValue = +lines[0].split(';')[4];
  let maxValue = 0;

  lines.forEach(element => {
    const value = +element.split(';')[4];
    if (value > maxValue) {
      maxValue = value;
    };
    if (value < minValue) {
      minValue = value;
    };
  });
  console.log(`Cost of currency: Min: ${minValue}, Max: ${maxValue}`);

  // #4
  let countCurrency = 0; 

   lines.forEach(element => {
    const number = +element.split(';')[4];
    if (number >= 10 && number <= 30) {
        countCurrency++; 
    };
  });
  console.log(`Count currency between 10 and 30: ${countCurrency}`);

  // #5
  let USD = 0;
  let EUR = 0;
  let CHF = 0;

  lines.forEach(element => {
    const name = element.split(";")[3];
    const value = +element.split(";")[4];

    if(name === "USD" && !USD) {USD = value;}
    if(name === "EUR" && !EUR) {EUR = value;}
    if(name === "CHF" && !CHF) {CHF = value;}


  });

  const result = Math.floor((USD + EUR + CHF) / 3);
  console.log(`Arithmetic mean for USD, EUR, CHF is ${result}`);
}