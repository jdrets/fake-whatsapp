import React, {FunctionComponent} from 'react'

import {Wrapper, TextWrapper, HourWrapper, Hour, TextLabel, SenderTriangle, ReceiverTriangle} from './styles'
import {TextTypes} from './types'
import Tick from './components/Tick'

const Text: FunctionComponent<TextTypes> = ({onDelete, owner, text, isFirstMessage}) => {
  const isReceiver = owner === 'RECEIVER'
  const isSender = owner === 'SENDER'

  return (
    <Wrapper onClick={onDelete} owner={owner}>
      {(isReceiver && isFirstMessage) && <ReceiverTriangle/>}
      <TextWrapper owner={owner} isFirstMessage={isFirstMessage}>
        <TextLabel>{text}</TextLabel>
        <HourWrapper>
          <Hour>13:30</Hour>
          {isSender && <Tick/>}
        </HourWrapper>
      </TextWrapper>
      {(isSender && isFirstMessage) && <SenderTriangle/>}
    </Wrapper>
  )
}

export default Text
