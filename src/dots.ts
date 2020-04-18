import { Gender, Unit } from './types'
import kg2lbs from './libs/kg2lbs'

const coefficients = {
  m: [-1.093e-6, 7.391293e-4, -0.1918759221, 24.0900756, -307.75076],
  f: [-0.0000010706, 0.0005158568, -0.1126655495, 13.6175032, -57.96288],
}

const coefficient = (weight: number, gender: Gender) => {
  const c = coefficients[gender]
  const w = weight
  const numerator = 500

  return (
    numerator /
    (c[0] * w ** 4 + c[1] * w ** 3 + c[2] * w ** 2 + c[3] * w + c[4])
  )
}

export const dots = (
  bodyWeight: number,
  liftedWeight: number,
  gender: Gender,
  unitType: Unit = 'kg'
) => {
  if (unitType === 'lb') {
    bodyWeight = kg2lbs(bodyWeight)
    liftedWeight = kg2lbs(liftedWeight)
  }

  return parseFloat((liftedWeight * coefficient(bodyWeight, gender)).toFixed(2))
}

export default dots
