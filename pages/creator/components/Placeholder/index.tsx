import React, { useState, FunctionComponent, ChangeEvent } from 'react'

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

  return (
    <Input
      type="text"
      value={text || ''}
      onChange={handleChangeText}
      onBlur={handleSave}
      placeholder="Agregar texto"
    />
  )
}


export default Placeholder
