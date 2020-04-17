const maleCoefficients = {
  a: -216.0475144,
  b: 16.2606339,
  c: -0.002388645,
  d: -0.00113732,
  e: 7.01863e-6,
  f: -1.291e-8,
}

const coefficient = (weight) => {
  const { a, b, c, d, e, f } = maleCoefficients

  return (
    500 /
    (a +
      b * weight +
      c * weight ** 2 +
      d * weight ** 3 +
      e * weight ** 4 +
      f * weight ** 5)
  )
}

const wilks = (bodyWeight: number, liftedWeight: number) => {
  return parseFloat((liftedWeight * coefficient(bodyWeight)).toFixed(2))
}

export default wilks
