import { test, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/vue'
import ApiDemo from './ApiDemo.vue'

test('api', async () => {
  // Arrange
  const { getByRole, findByTestId, debug } = render(ApiDemo)
  const button = getByRole('button')

  // Act
  await fireEvent.click(button)
  const output = await findByTestId('output')

  // Assert
  expect(output).toHaveTextContent('Vue')
})
