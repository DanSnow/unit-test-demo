import { test, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/vue'
import Button from './Button.vue'

test('button', async () => {
  // Arrange
  const onClick = vi.fn()
  const { getByRole, emitted, container, debug, rerender } = render(Button, {
    props: { onClick },
    slots: { default: 'Hello Button' },
  })
  const button = getByRole('button')

  // Act
  await fireEvent.click(button)

  // Assert
  expect(button).toHaveTextContent('Hello Button')
  expect(onClick).toBeCalled()
  expect(emitted()).toHaveProperty('click')
})
