import {useState, useRef} from 'react'
import {v4 as uuid} from 'uuid'
import _ from 'lodash'
import {useScreenshot} from "use-screenshot-hook";

import {CreatorWrapper, PlaceholdersWrapper, MessagesWrapper, Button, ButtonWrapper} from './styles'
import Placeholder from './components/Placeholder'
import Text from './components/Text'

const Creator = () => {
  const ref = useRef(null);
  const [messages, setMessages] = useState([])
  const {image, takeScreenshot, clear} = useScreenshot({ref: ref});

  const getHour = () => {
    const date = new Date()
    const minutes = date.getMinutes();
    const hour = date.getHours();

    return `${hour}:${minutes}`
  }

  const handleNewText = (text: string, owner: string) => {
    const newMessages = _.clone(messages)
    const lastMessage = _.last(messages)

    newMessages.push({
      text,
      owner,
      isFirstMessage: lastMessage?.owner !== owner,
      hour: getHour()
    })

    setMessages(newMessages)
  }

  const reset = () => {
    clear()
    setMessages([])
  }

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {image && <img width='100%' src={image} alt="WhatsApp conversation"/>}
      {!image && <CreatorWrapper>
        <MessagesWrapper ref={ref}>
          {
            messages.map(message => (
              <Text
                key={uuid()}
                text={message.text}
                owner={message.owner}
                onDelete={() => true}
                isFirstMessage={message.isFirstMessage}
                hour={message.hour}
              />
            ))
          }
        </MessagesWrapper>

        <PlaceholdersWrapper>
          <Placeholder to="RECEIVER" onSubmit={handleNewText}/>
          <Placeholder to="SENDER" onSubmit={handleNewText}/>
        </PlaceholdersWrapper>
      </CreatorWrapper>
      }
      <ButtonWrapper>
        {!image && <Button onClick={() => takeScreenshot()}>Crear captura</Button>}
        {image && <Button onClick={() => clear()}>Modificar</Button>}
        {image && <Button onClick={reset}>Crear nueva conversación</Button>}
      </ButtonWrapper>
    </>
  )
}

export default Creator
