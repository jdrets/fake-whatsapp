import React from 'react'
import {render, fireEvent, waitFor} from '@testing-library/react'
import { ThemeProvider } from 'styled-components';

import { theme } from 'utils/theme'
import Placeholder from '.'

const setup = (mock = {}) => (
  render(
    <ThemeProvider theme={theme}>
      <Placeholder
        onSubmit={jest.fn()}
        to="RECEIVER"
        {...mock}
      />
    </ThemeProvider>
  )
)

describe('<Placeholder />', () => {
  test('Should match with a snapshot when owner is RECEIVER', () => {
    const { container } = setup({
      owner: 'RECEIVER'
    })

    expect(container).toMatchSnapshot()
  })

  test('Should change text when input is filled', async () => {
    const { getByPlaceholderText } = setup()
    const input = getByPlaceholderText('Agregar texto') as HTMLInputElement

    fireEvent.change(input, {
      target: {
        value: 'some dummy value'
      }
    })

    expect(input.value).toBe('some dummy value')
  })

  test('Should call onSubmit function when blur input', async () => {
    const onSubmitMock = jest.fn()
    const { getByPlaceholderText } = setup({
      onSubmit: onSubmitMock
    })
    const input = getByPlaceholderText('Agregar texto')

    fireEvent.change(input, {
      target: {
        value: 'some dummy value'
      }
    })

    fireEvent.blur(input)

    expect(onSubmitMock).toHaveBeenCalled()
  })

  test('Should call onSubmit function when enter button is pressed', async () => {
    const onSubmitMock = jest.fn()
    const { getByPlaceholderText } = setup({
      onSubmit: onSubmitMock
    })
    const input = getByPlaceholderText('Agregar texto')

    fireEvent.change(input, {
      target: {
        value: 'some dummy value'
      }
    })

    fireEvent.keyDown(input, {
      key: 'Enter'
    })

    expect(onSubmitMock).toHaveBeenCalled()
  })

  test('Should not call onSubmit function when text state is null', async () => {
    const onSubmitMock = jest.fn()
    const { getByPlaceholderText } = setup({
      onSubmit: onSubmitMock
    })
    const input = getByPlaceholderText('Agregar texto')

    fireEvent.blur(input)

    expect(onSubmitMock).toHaveBeenCalledTimes(0)
  })
})
