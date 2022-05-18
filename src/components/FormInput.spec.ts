import { test, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/vue'
import FormInput from './FormInput.vue'

test('form input', async () => {
  // Arrange
  const onUpdate = vi.fn()
  const { getByRole, queryByText, rerender } = render(FormInput, {
    props: { modelValue: '', 'onUpdate:modelValue': onUpdate },
  })
  const input = getByRole('searchbox')

  expect(queryByText('field is required')).not.toBeVisible()

  // Act
  await fireEvent.touch(input)

  // Assert
  expect(queryByText('field is required')).toBeVisible()
  expect(onUpdate).not.toBeCalled()

  // Act
  await fireEvent.update(input, 'foo')

  // Assert
  expect(onUpdate).toBeCalledWith('foo')

  // Act
  rerender({ modelValue: 'foo', 'onUpdate:modelValue': onUpdate })
  await fireEvent.touch(input)

  // Assert
  expect(queryByText('field is required')).not.toBeVisible()
  expect(input).toHaveValue('foo')
})
