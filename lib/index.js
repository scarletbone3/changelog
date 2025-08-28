export const add = (a, b) => {
  return a + b;
}

export const subtract = (a, b) => {
  return a - b;
}

export const multiply = (a, b) => {
  return a * b;
}

export const divide = (a, b) => {
  if (b !== 0) {
    return a / b;
  }

  return Infinity;
}

export const pow = (a, b) => {
  let r = 1;

  for (let i = 0; i < b; ++i) {
    r *= a;
  }

  return r;
}
