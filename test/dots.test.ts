describe('DOTS', () => {
  it('should calculate DOTS points for males', async () => {
    expect(dots(80.5, 700, 'male')).toBe(480.92)
  })

  it('should calculate DOTS points for females', async () => {
    expect(dots(62.15, 400, 'female')).toBe(433.8)
  })

  it('should calculate DOTS points in kg by default', async () => {
    expect(dots(62.15, 400, 'female')).toBe(433.8)
  })

  it('should calculate DOTS points in pounds if specified', async () => {
    expect(dots(137, 882, 'female', 'lb')).toBe(433.8)
    // or 516.37
  })
})
