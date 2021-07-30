import styled from 'styled-components'

import { WrapperTypes } from './types'

export const Wrapper = styled.div<WrapperTypes>`
  position: relative;
  display: flex;
  justify-content: ${({ owner }) => owner === 'SENDER' ? 'flex-end' : 'flex-start'};
`

export const TextWrapper = styled.div<WrapperTypes>`
  position: relative;
  border-radius: 12px;
  padding: 8px 12px;
  text-align: left;
  font-size: 16px;
  background: ${({ owner }) => owner === "SENDER" ? '#dafebe' : 'white'};
  margin-bottom: 8px;
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

export const SenderTriangle = styled.div<WrapperTypes>`
  clip-path: polygon(100% 0, 0% 100%, 0 0);
  background: #dafebe;
  height: 14px;
  width: 14px;
  position: absolute;
  right: -12px;
  top: 0
`