const stringEquals = (valueA, valueB) => {
  if (valueA.length != valueB.length) {
    return false;
  } else {
    let result = false;

    for (let i = 0; i < valueA.length; i++) {
      if (!Object.is(valueA[i], valueB[i])) {
        return false;
      } else {
        result = true;
      }
    }
    return result;
  }
};
