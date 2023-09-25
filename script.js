console.log(investmentApp(50, 15));
console.log(investmentApp(50, 15, 10));

function investmentApp(capital, percentage, years = 1) {
  if (!capital || capital < 1 || typeof capital !== 'number')
    return 'Capital must be a positive number\n';
  if (!percentage || percentage < 1 || typeof percentage !== 'number')
    return 'Percentage must be a positive number\n';
  if (years < 1 || typeof years !== 'number')
    return 'Years of investment must be a positive integer\n';

  const results = calculateInvestment(capital, percentage, years)
  return getFinalMsg(
    capital,
    years,
    percentage,
    results.finalProfit.toFixed(2),
    results.finalCapital.toFixed(2)
  )
}

function calculateInvestment(initCapital, percentage, years) {
  let finalProfit;
  let finalCapital = initCapital;
  for (let i = 1; i <= years; i++) {
    finalProfit = finalCapital * percentage / 100;
    finalCapital = finalCapital + finalProfit;
  }
  return {
    finalProfit,
    finalCapital
  }
}

function getFinalMsg(initCapital, years, percentage, finalProfit, finalCapital) {
  return '- Initial capital: ' + initCapital + ' m'
    + '\n- Percentage: ' + percentage + '%'
    + '\n- Profit after ' + years + ' years: ' + finalProfit + ' m'
    + '\n- Capital after ' + years + ' years: ' + finalCapital + ' m'
    + '\n'
}
