import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import _ from 'lodash'

import { Wrapper, PlaceholdersWrapper } from './styles'
import Placeholder from './components/Placeholder'
import Text from './components/Text'

const Creator = () => {
  const [messages, setMessages] = useState([])

  const handleNewText = (text: string, owner: string) => {
    const newMessages = _.clone(messages)
    newMessages.push({
      text,
      owner,
    })

    setMessages(newMessages)
  }

  console.log(messages)

  return (
    <Wrapper>
      {
        messages.map(message => (
          <Text
            key={uuid()}
            text={message.text}
            owner={message.owner}
            onDelete={() => true}
          />
        ))
      }
      <PlaceholdersWrapper>
        <Placeholder to="RECEIVER" onSubmit={handleNewText} />
        <Placeholder to="SENDER" onSubmit={handleNewText} />
      </PlaceholdersWrapper>
    </Wrapper>
  )
}

export default Creator