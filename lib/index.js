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

  if (b >= 0) {
    for (let i = 0; i < b; ++i) {
      r *= a;
    }
  } else {
    if (a === 0) {
      return Infinity;
    }

    for (let i = 0; i < Math.abs(b); ++i) {
      r /= a;
    }
  }

  return r;
}

export const sign = (a) => {
  if (a === 0) {
    return 0;
  }

  return a / Math.abs(a);
}
