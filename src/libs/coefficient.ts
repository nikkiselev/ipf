export default (weight: number, params: any, numerator: number) =>
  numerator /
  params.reduce(
    (a: any, b: any, key: number) =>
      a + b * weight ** (params.length - key - 1),
    0
  )
