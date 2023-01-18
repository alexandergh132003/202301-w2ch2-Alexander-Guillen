const equalNumbers = (valueA, valueB) => {
  let absoluteValueA = Math.abs(valueA),
    absoluteValueB = Math.abs(valueB);

  if (Object.is(valueA, NaN) && Object.is(valueB, NaN)) {
    return false;
  } else if (Object.is(absoluteValueA, 0) && Object.is(absoluteValueB, 0)) {
    return true;
  } else {
    return Object.is(valueA, valueB);
  }
};

export default equalNumbers;
