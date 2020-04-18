import { Gender, Wilks } from './types'
import kg2lbs from './libs/kg2lbs'
import format from './libs/format'

/**
 * Coefficients for Wilks v.1 before 2020
 */
const paramsV1 = {
  m: [
    -1.291e-8,
    7.01863e-6,
    -0.00113732,
    -0.002388645,
    16.2606339,
    -216.0475144,
  ],
  f: [
    -9.054e-8,
    4.731582e-5,
    -0.00930733913,
    0.82112226871,
    -27.23842536447,
    594.31747775582,
  ],
}

/**
 * Coefficients for Wilks v.2 2020
 */
const paramsV2 = {
  m: [
    -1.20804336482315e-8,
    7.07665973070743e-6,
    -0.00139583381094385,
    0.073694103462609,
    8.47206137941125,
    47.4617885411949,
  ],
  f: [
    -2.3334613884954e-8,
    9.38773881462799e-6,
    -0.0010504000506583,
    -0.0330725063103405,
    13.7121941940668,
    -125.425539779509,
  ],
}

const coefficient = (weight: number, gender: Gender, version = 2) => {
  const c = version === 2 ? paramsV2[gender] : paramsV1[gender]
  const numerator = version === 2 ? 600 : 500
  return (
    numerator /
    c.reduce((a, b, key) => a + b * weight ** (c.length - key - 1), 0)
  )
}

/**
 * Wilks v.2 - 2020
 */
export const wilks2: Wilks = (
  bodyWeight,
  liftedWeight,
  gender,
  unitType = 'kg',
  version = 2
) => {
  if (unitType === 'lb') {
    bodyWeight = kg2lbs(bodyWeight)
    liftedWeight = kg2lbs(liftedWeight)
  }

  return format(liftedWeight * coefficient(bodyWeight, gender, version))
}

/**
 * Wilks v.1 - before 2020
 */
export const wilks: Wilks = (
  bodyWeight,
  liftedWeight,
  gender,
  unitType = 'kg'
) => wilks2(bodyWeight, liftedWeight, gender, unitType, 1)
