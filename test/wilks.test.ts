import { wilks, wilks2 } from '../src/index'

describe('wilks', () => {
  it('should calculate the score for males', async () => {
    expect(wilks2(80.5, 700, 'm')).toBe(571.27)
  })

  it('should calculate the score for females', async () => {
    expect(wilks2(62.15, 400, 'f')).toBe(515.79)
  })

  it('should calculate in kg by default', async () => {
    expect(wilks2(62.15, 400, 'f')).toBe(515.79)
  })

  it('should calculate in pounds if specified', async () => {
    expect(wilks2(137, 882, 'f', 'lb')).toBe(515.92)
  })
})

describe('wilks before 2020', () => {
  it('should calculate the score for males', async () => {
    expect(wilks(93, 700, 'm')).toBe(439.73)
  })

  it('should calculate the score for females', async () => {
    expect(wilks(62, 400, 'f')).toBe(434.84)
  })

  it('should calculate in kg by default', async () => {
    expect(wilks(62, 400, 'f')).toBe(434.84)
  })

  it('should calculate in pounds if specified', async () => {
    expect(wilks(137, 882, 'f', 'lb')).toBe(434.16)
  })
})
