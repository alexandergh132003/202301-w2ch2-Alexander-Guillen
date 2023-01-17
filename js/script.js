import booleansEquals from "./booleansEquals.js";
import numbersEquals from "./numbersEquals.js";
import stringEquals from "./stringEquals.js";

const strictEquals = (valueA, valueB) => {
  let valueAType = typeof valueA,
    valueBType = typeof valueB;

  if (Object.is(valueAType, valueBType)) {
    if (Object.is(valueAType, "number") && Object.is(valueBType, "number")) {
      return numbersEquals(valueA, valueB);
    }

    if (Object.is(valueAType, "string") && Object.is(valueBType, "string")) {
      return stringEquals(valueA, valueB);
    }

    if (Object.is(valueAType, "boolean") && Object.is(valueAType, "boolean")) {
      return booleansEquals(valueA, valueB);
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
