import React, { FunctionComponent } from 'react'

import { Wrapper, TextWrapper, HourWrapper, Hour, TextLabel, SenderTriangle } from './styles'
import { TextTypes } from './types'
import Tick from './components/Tick'

const Text: FunctionComponent<TextTypes> = ({ onDelete, owner, text }) => (
  <Wrapper onClick={onDelete} owner={owner}>
    <TextWrapper owner={owner}>
      <TextLabel>{text}</TextLabel>
      <HourWrapper>
        <Hour>13:30</Hour>
        { owner === 'SENDER' && <Tick /> }
      </HourWrapper>
    </TextWrapper>
    <SenderTriangle owner={owner} />
  </Wrapper>
)

export default Text
