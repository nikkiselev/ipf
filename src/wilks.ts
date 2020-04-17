const maleCoefficients = {
  a: -216.0475144,
  b: 16.2606339,
  c: -0.002388645,
  d: -0.00113732,
  e: 7.01863e-6,
  f: -1.291e-8,
}

const femaleCoefficients = {
  a: 594.31747775582,
  b: -27.23842536447,
  c: 0.82112226871,
  d: -0.00930733913,
  e: 4.731582e-5,
  f: -9.054e-8,
}

const coefficient = (weight: number, gender: Gender) => {
  const { a, b, c, d, e, f } =
    gender === 'male' ? maleCoefficients : femaleCoefficients

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

type Gender = 'male' | 'female'

const wilks = (bodyWeight: number, liftedWeight: number, gender: Gender) => {
  return parseFloat((liftedWeight * coefficient(bodyWeight, gender)).toFixed(2))
}

export default wilks
