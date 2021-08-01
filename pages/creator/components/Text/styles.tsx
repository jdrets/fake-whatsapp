import styled from 'styled-components'

import { WrapperTypes } from './types'

export const Wrapper = styled.div<WrapperTypes>`
  position: relative;
  display: flex;
  justify-content: ${({ owner }) => owner === 'SENDER' ? 'flex-end' : 'flex-start'};
`

const getTriangle = (owner: string, isFirstMessage: boolean) => {
  if (owner === 'SENDER' && isFirstMessage) {
    return '12px 0 12px 12px'
  }
  if (owner === 'RECEIVER' && isFirstMessage) {
    return '0 12px 12px 12px'
  }
  return '12px'
}

export const TextWrapper = styled.div<WrapperTypes>`
  position: relative;
  border-radius: ${({ owner, isFirstMessage }) => getTriangle(owner, isFirstMessage)};
  padding: 8px 12px;
  text-align: left;
  font-size: 16px;
  background: ${({ owner }) => owner === "SENDER" ? '#dafebe' : 'white'};
  margin-bottom: 2px;
  margin-top: ${({ isFirstMessage }) => isFirstMessage && '6px'};
  min-width: 120px;
  max-width: 90%;
  border-bottom: 1px solid #dbdbdb;
`

export const TextLabel = styled.div`
  padding-right: 68px;
  line-height: 18px;
`

export const HourWrapper = styled.div`
  position: absolute;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  opacity: 0.4;
  margin-top: -14px;
`

export const Hour = styled.span`
  font-size: 12px;
`

export const SenderTriangle = styled.div`
  clip-path: polygon(100% 0, 0% 100%, 0 0);
  background: #dafebe;
  height: 10px;
  width: 8px;
  position: absolute;
  right: -8px;
  top: 6px
`

export const ReceiverTriangle = styled.div`
  clip-path: polygon(100% 1%, 0 0, 100% 100%);
  background: white;
  height: 10px;
  width: 8px;
  position: absolute;
  left: -8px;
  top: 6px
`
