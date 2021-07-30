import styled from 'styled-components'

export const Input = styled.input`
  border-radius: 24px;
  border: 2px dotted ${({ theme }) => theme.colors.primary};
  padding: 8px 0;
  font-size: 14px;
  background: transparent;
  outline: none;
  text-align: center;
  word-break: break-word;
  
  &::placeholder {
    text-align: center;
  }
  
  &:focus {
    border-style: solid;
  }
`
