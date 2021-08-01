export interface TextTypes {
  onDelete: () => void
  text: string
  owner: string
  hour: string
  isFirstMessage: boolean
}

export interface WrapperTypes {
  owner: string
  isFirstMessage?: boolean
}
