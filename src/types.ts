export type Gender = 'm' | 'f'

export type Unit = 'kg' | 'lb'

export type Wilks = (
  bodyWeight: number,
  liftedWeight: number,
  gender: Gender,
  unitType?: Unit,
  version?: number
) => number

export type DOTS = (
  bodyWeight: number,
  liftedWeight: number,
  gender: Gender,
  unitType?: Unit
) => number
