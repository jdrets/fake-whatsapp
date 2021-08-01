export interface TextTypes {
  onDelete: () => void
  text: string
  owner: string
  isFirstMessage: boolean
}

export interface WrapperTypes {
  owner: string
  isFirstMessage?: boolean
}
