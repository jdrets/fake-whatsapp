import React, { useState, FunctionComponent, ChangeEvent, KeyboardEvent } from 'react'

import { Input } from './styles'
import { PlaceholderTypes } from './types'

const Placeholder: FunctionComponent<PlaceholderTypes> = ({ onSubmit, to }) => {
  const [text, setText] = useState('')

  const handleChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event
    setText(value)
  }

  const handleSave = () => {
    if (text) {
      onSubmit(text, to)
      setText('')
    }
  }

  const handleKeyDown = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      handleSave()
    }
  }

  return (
    <Input
      type="text"
      value={text || ''}
      onChange={handleChangeText}
      onKeyDown={handleKeyDown}
      onBlur={handleSave}
      placeholder="Agregar texto"
    />
  )
}


export default Placeholder
