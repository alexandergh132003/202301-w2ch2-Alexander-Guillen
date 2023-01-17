const numbersEquals = (valueA, valueB) => {
  if (Object.is(valueA, NaN) && Object.is(valueB, NaN)) {
    return false;
  } else {
    return Object.is(Math.abs(valueA), Math.abs(valueB));
  }
};
