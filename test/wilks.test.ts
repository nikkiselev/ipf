import { wilks } from '../src/index'

describe('wilks', () => {
  it('should calculate the score for males', async () => {
    expect(wilks(93, 700, 'male')).toBe(439.73)
  })

  it('should calculate the score for females', async () => {
    expect(wilks(62, 400, 'female')).toBe(434.84)
  })

  it('should calculate in kg by default', async () => {
    expect(wilks(62, 400, 'female')).toBe(434.84)
  })

  it('should calculate in pounds if specified', async () => {
    expect(wilks(62, 400, 'female', 'lb')).toBe(303.71)
  })
})
