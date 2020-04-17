import { wilks } from '../src/index'

describe('wilks', () => {
  it('should calculate the score', async () => {
    expect(wilks(93, 700)).toBe(439.73)
  })
})
