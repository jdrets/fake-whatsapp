import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import _ from 'lodash'

import { Wrapper, PlaceholdersWrapper, MessagesWrapper } from './styles'
import Placeholder from './components/Placeholder'
import Text from './components/Text'

const Creator = () => {
  const [messages, setMessages] = useState([])

  const handleNewText = (text: string, owner: string) => {
    const newMessages = _.clone(messages)
    const lastMessage = _.last(messages)

    newMessages.push({
      text,
      owner,
      isFirstMessage: lastMessage?.owner !== owner
    })

    console.log(newMessages)

    setMessages(newMessages)
  }

  return (
    <Wrapper>
      <MessagesWrapper>
      {
        messages.map(message => (
          <Text
            key={uuid()}
            text={message.text}
            owner={message.owner}
            onDelete={() => true}
            isFirstMessage={message.isFirstMessage}
          />
        ))
      }
      </MessagesWrapper>

      <PlaceholdersWrapper>
        <Placeholder to="RECEIVER" onSubmit={handleNewText} />
        <Placeholder to="SENDER" onSubmit={handleNewText} />
      </PlaceholdersWrapper>
    </Wrapper>
  )
}

export default Creator
