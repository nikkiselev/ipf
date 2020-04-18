import { dots } from '../src/index'

describe('DOTS', () => {
  it('should calculate DOTS points for males', async () => {
    expect(dots(80, 700, 'm')).toBe(482.68)
  })

  it('should calculate DOTS points for females', async () => {
    expect(dots(62.15, 400, 'f')).toBe(433.8)
  })

  it('should calculate DOTS points in kg by default', async () => {
    expect(dots(62.15, 400, 'f')).toBe(433.8)
  })

  it('should calculate DOTS points in pounds if specified', async () => {
    expect(dots(137, 882, 'f', 'lb')).toBe(433.91)
  })
})
