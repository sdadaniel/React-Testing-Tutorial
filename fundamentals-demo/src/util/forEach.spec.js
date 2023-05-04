import { forEach } from './forEach'

test('forEach mock function', () => {
  const mockCallback = jest.fn((x) => 42 + x)
  forEach([0, 1], mockCallback)

  // The mock function was called twice
  expect(mockCallback.mock.calls).toHaveLength(2)

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0)

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1)

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42)
})

describe('Mock Function with no argument', () => {
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
