import { wilks, wilksOld } from '../src/index'

describe('wilks', () => {
  it('should calculate the score for males', async () => {
    expect(wilks(80.5, 700, 'male')).toBe(571.27)
  })

  it('should calculate the score for females', async () => {
    expect(wilks(62.15, 400, 'female')).toBe(515.79)
  })

  it('should calculate in kg by default', async () => {
    expect(wilks(62.15, 400, 'female')).toBe(515.79)
  })

  it('should calculate in pounds if specified', async () => {
    expect(wilks(137, 882, 'female', 'lb')).toBe(515.92)
    // or 516.37
  })
})

describe('wilks before 2020', () => {
  it('should calculate the score for males', async () => {
    expect(wilksOld(93, 700, 'male')).toBe(439.73)
  })

  it('should calculate the score for females', async () => {
    expect(wilksOld(62, 400, 'female')).toBe(434.84)
  })

  it('should calculate in kg by default', async () => {
    expect(wilksOld(62, 400, 'female')).toBe(434.84)
  })

  it('should calculate in pounds if specified', async () => {
    expect(wilksOld(137, 882, 'female', 'lb')).toBe(434.16)
  })
})
