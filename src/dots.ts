import { DOTS } from './types'
import kg2lbs from './libs/kg2lbs'
import format from './libs/format'
import coefficient from './libs/coefficient'

const params = {
  m: [-1.093e-6, 7.391293e-4, -0.1918759221, 24.0900756, -307.75076],
  f: [-1.0706e-6, 5.158568e-4, -0.1126655495, 13.6175032, -57.96288],
}

export const dots: DOTS = (
  bodyWeight,
  liftedWeight,
  gender,
  unitType = 'kg'
) => {
  if (unitType === 'lb') {
    bodyWeight = kg2lbs(bodyWeight)
    liftedWeight = kg2lbs(liftedWeight)
  }

  const numerator = 500

  return format(
    liftedWeight * coefficient(bodyWeight, params[gender], numerator)
  )
}

export default dots
