import equalStrings from "./stringEquals.js";
import equalBooleans from "./booleansEquals.js";
import equalNumbers from "./numbersEquals.js";

const strictEquals = (valueA, valueB) => {
  let valueAType = typeof valueA,
    valueBType = typeof valueB;

  if (Object.is(valueAType, valueBType)) {
    if (Object.is(valueAType, "number") && Object.is(valueBType, "number")) {
      return equalNumbers(valueA, valueB);
    }

    if (Object.is(valueAType, "string") && Object.is(valueBType, "string")) {
      return equalBooleans(valueA, valueB);
    }

    if (Object.is(valueAType, "boolean") && Object.is(valueAType, "boolean")) {
      return equalStrings(valueA, valueB);
    }
  } else {
    return false;
  }
};

console.log(
  strictEquals(1, 1),
  strictEquals(NaN, NaN),
  strictEquals(0, -0),
  strictEquals(-0, 0),
  strictEquals(1, "1"),
  strictEquals(true, false),
  strictEquals(false, false),
  strictEquals("Water", "oil")
);
