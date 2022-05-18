import { vi, test, expect } from 'vitest'

test('mock fn', () => {
  const fn = vi.fn()

  expect(fn).not.toBeCalled()

  fn(42)

  expect(fn).toBeCalled()
  expect(fn).toBeCalledTimes(1)
  expect(fn).toBeCalledWith(42)

  vi.mocked(fn).mockReset() // reset call count, etc
  expect(fn).not.toBeCalled()

  fn(1, 2, 3)

  expect(fn).toBeCalledWith(1, 2, 3)
  expect(fn).toBeCalledWith(expect.any(Number), 2, 3)
})
