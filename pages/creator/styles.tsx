import styled from 'styled-components'

export const CreatorWrapper = styled.section`
  background-image: url('/images/bg.png');
  background-position: center;
  background-size: cover;
`

export const ButtonWrapper  = styled.section`
  display: flex;
  justify-content: center;
  padding: 24px 0;
  gap: 8px
`

export const Button  = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 24px;
  border: none;
  color: white;
  display: inline-block;
  font-weight: 600;
  padding: 12px 24px;
`

export const PlaceholdersWrapper = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 24px;
  padding: 12px;
`

export const MessagesWrapper = styled.div`
  background-image: url('/images/bg.png');
  background-position: center;
  background-size: cover;
  min-height: calc(100vh - 220px);
  padding: 12px;
`
