import styled from 'styled-components'

export const Wrapper = styled.section<any>`
  background: #f1f1f1;
  background-image: url('/images/bg.png') ;
  background-position: center;
  background-size: cover;
  padding: 32px;
`

export const PlaceholdersWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 24px;
`

export const MessagesWrapper = styled.div`
  min-height: 320px;
`
