import styled from 'styled-components'

import { WrapperTypes } from './types'

export const Wrapper = styled.div<WrapperTypes>`
  display: flex;
  font-family: 'Open Sans', sans-serif;
  justify-content: ${({ owner }) => owner === 'SENDER' ? 'flex-end' : 'flex-start'};
  position: relative;
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
  background: ${({ owner }) => owner === "SENDER" ? '#dafebe' : 'white'};
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: ${({ owner, isFirstMessage }) => getTriangle(owner, isFirstMessage)};
  font-size: 14px;
  margin-bottom: 2px;
  margin-top: ${({ isFirstMessage }) => isFirstMessage && '6px'};
  max-width: 90%;
  min-width: 120px;
  padding: 8px 12px;
  position: relative;
  text-align: left;
`

export const TextLabel = styled.div`
  line-height: 18px;
  padding-right: 68px;
`

export const HourWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin-top: -12px;
  opacity: 0.4;
  position: absolute;
  right: 8px;
`

export const Hour = styled.span`
  font-size: 11px;
  margin-right: 4px;
`

export const SenderTriangle = styled.div`
  background: #dafebe;
  clip-path: polygon(100% 0, 0% 100%, 0 0);
  height: 10px;
  position: absolute;
  right: -8px;
  top: 6px;
  width: 8px;
`

export const ReceiverTriangle = styled.div`
  background: white;
  clip-path: polygon(100% 1%, 0 0, 100% 100%);
  height: 10px;
  left: -8px;
  position: absolute;
  top: 6px;
  width: 8px;
`
