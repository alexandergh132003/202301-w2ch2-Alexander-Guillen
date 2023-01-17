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
