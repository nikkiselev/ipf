import { Gender, Wilks } from './types'
import kg2lbs from './libs/kg2lbs'

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

const coefficients2020 = {
  male: [
    47.4617885411949,
    8.47206137941125,
    0.073694103462609,
    -0.00139583381094385,
    7.07665973070743e-6,
    -1.20804336482315e-8,
  ],
  female: [
    -125.425539779509,
    13.7121941940668,
    -0.0330725063103405,
    -0.0010504000506583,
    9.38773881462799e-6,
    -2.3334613884954e-8,
  ],
}

const coefficient = (weight: number, gender: Gender, legacy = false) => {
  const c = legacy ? coefficients[gender] : coefficients2020[gender]

  const numerator = legacy ? 500 : 600

  return (
    numerator /
    (c[0] +
      c[1] * weight +
      c[2] * weight ** 2 +
      c[3] * weight ** 3 +
      c[4] * weight ** 4 +
      c[5] * weight ** 5)
  )
}

export const wilks: Wilks = (
  bodyWeight,
  liftedWeight,
  gender,
  unitType = 'kg',
  legacy = false
) => {
  if (unitType === 'lb') {
    bodyWeight = kg2lbs(bodyWeight)
    liftedWeight = kg2lbs(liftedWeight)
  }

  return parseFloat(
    (liftedWeight * coefficient(bodyWeight, gender, legacy)).toFixed(2)
  )
}

export const wilksOld: Wilks = (
  bodyWeight,
  liftedWeight,
  gender,
  unitType = 'kg'
) => wilks(bodyWeight, liftedWeight, gender, unitType, true)
