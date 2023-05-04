const forEach = require('./mockFn')

const mockCallback = jest.fn((x) => 42 + x)

describe('Mock Function Test', () => {
  test('simple mock function test', () => {
    const mockFn = jest.fn()

    mockFn()
    mockFn(1)
    mockFn('a')
    mockFn([1, 2], { a: 'b' })

    mockFn.mockReturnValue('I am a mock!')

    expect(mockFn()).toBe('I am a mock!')
  })

  test('async mock function test', async () => {
    const asyncMockFn = jest.fn().mockResolvedValue('I am a mock!')
    const result = await asyncMockFn()
    expect(result).toBe('I am a mock!')
  })
})
