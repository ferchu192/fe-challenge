const parseExponent = (numberExp) => {
  let text = numberExp.toString();
  const exponentIndex = text.indexOf("e");
  const exponent = text.substring(exponentIndex);

  text = text.substring(0, exponentIndex);
  const number = parseFloat(text);
  
  const round = Math.round(number * 100) / 100;
  return `${round}${exponent}`;
}

export const parseNumber = (number, type) => {
  if (!number) return 0;

  switch (type) {
    case 'exp':
      return parseExponent(number);

    // eslint-disable-next-line no-fallthrough
    default:
      return Math.round(number * 100) / 100
  }
}