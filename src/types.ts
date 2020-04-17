export type Gender = 'male' | 'female'

export type Unit = 'kg' | 'lb'

export type Wilks = (
  bodyWeight: number,
  liftedWeight: number,
  gender: Gender,
  unitType?: Unit
) => number
