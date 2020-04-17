export type Gender = 'male' | 'female'

export type Wilks = (
  bodyWeight: number,
  liftedWeight: number,
  gender: Gender,
  unitType?: 'kg' | 'lb'
) => number
