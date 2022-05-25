import { render } from '@testing-library/vue'
import { beforeEach, afterEach, test, expect, vi, SpyInstance } from 'vitest'
import InfiniteRender from './InfiniteRender.vue'

let consoleSpy: SpyInstance<any[], void>

beforeEach(() => {
  consoleSpy = vi.spyOn(console, 'warn')
})

afterEach(() => {
  // expect to be fail
  expect(consoleSpy).not.toBeCalledWith(expect.stringMatching(/Maximum recursive/))
})

test('infinite render example', () => {
  render(InfiniteRender)
})
