import { Gender, Wilks } from './types'

const coefficients = {
  male: [
    -216.0475144,
    16.2606339,
    -0.002388645,
    -0.00113732,
    7.01863e-6,
    -1.291e-8,
  ],
  female: [
    594.31747775582,
    -27.23842536447,
    0.82112226871,
    -0.00930733913,
    4.731582e-5,
    -9.054e-8,
  ],
}

const coefficient = (weight: number, gender: Gender) => {
  const c = coefficients[gender]

  return (
    500 /
    (c[0] +
      c[1] * weight +
      c[2] * weight ** 2 +
      c[3] * weight ** 3 +
      c[4] * weight ** 4 +
      c[5] * weight ** 5)
  )
}

const wilks: Wilks = (bodyWeight, liftedWeight, gender) =>
  parseFloat((liftedWeight * coefficient(bodyWeight, gender)).toFixed(2))

export default wilks
