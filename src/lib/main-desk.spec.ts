import { test, expect } from 'vitest'
import { FIXTURE } from './fixture'
import { getMainDeskMap } from './main-desk'

test('main desk', () => {
  const map = getMainDeskMap(FIXTURE)
  expect(map).toMatchInlineSnapshot(`
    Map {
      "1" => "1",
      "2" => "1",
      "3" => "1",
      "4" => "4",
      "5" => "4",
      "6" => "4",
    }
  `)
})
