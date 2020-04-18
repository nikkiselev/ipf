export default (weight: number, params: number[], numerator: number) =>
  numerator /
  params.reduce((a, b, key) => a + b * weight ** (params.length - key - 1), 0)
