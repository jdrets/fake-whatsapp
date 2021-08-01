import React from 'react'
import { render } from '@testing-library/react'

import Text from '.'

const setup = (mock = {}) => (
  render(
    <Text
      onDelete={jest.fn()}
      owner="RECEIVER"
      text="dummy text"
      isFirstMessage
      hour="13:00"
      {...mock}
    />
  )
)

describe('<Text />', () => {
  test('Should match with a snapshot when owner is RECEIVER', () => {
    const { container } = setup({
      owner: 'RECEIVER'
    })

    expect(container).toMatchSnapshot()
  })

  test('Should match with a snapshot when owner is SENDER', () => {
    const { container } = setup({
      owner: 'SENDER'
    })

    expect(container).toMatchSnapshot()
  })

  test('Should match with a snapshot when isFirstMessage is false', () => {
    const { container } = setup({
      owner: 'SENDER',
      isFirstMessage: false
    })

    expect(container).toMatchSnapshot()
  })
})
