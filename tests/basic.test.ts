import { test, expect } from 'vitest'

test('simple', () => {
  expect(1 + 1).toBe(2) // 1 + 1 === 2
  expect({ a: 1 }).toEqual({ a: 1 })
  expect({ a: 1 }).not.toBe({ a: 1 }) // { a: 1 } !== { a: 1 }
})
