import { test, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/vue'
import HelloWorld from './HelloWorld.vue'

test('counter increments', async () => {
  // Arrange
  const { getByRole } = render(HelloWorld, { props: { msg: 'World' } })
  const button = getByRole('button', { name: /count is/ })

  // Act
  await fireEvent.click(button)

  // Assert
  expect(button).toHaveTextContent('count is: 1')
})
