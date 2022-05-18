import { test, expect } from 'vitest'

test('snapshot', () => {
  expect({
    a: 1,
    b: 2,
    c: 3,
  }).toMatchSnapshot()

  expect({
    a: 1,
    b: 2,
    c: 3,
  }).toMatchInlineSnapshot(`
    {
      "a": 1,
      "b": 2,
      "c": 3,
    }
  `)
})
