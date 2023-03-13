import { Chat } from '@/layouts/Chat'
import Header from '@/layouts/Header'
import Player from '@/layouts/Player'
import { useState } from 'react'
import { ProgressBar } from '@/components/ProgressBar'
import { Transition } from 'react-transition-group'
import { Money } from '@/components/Money'
import { ACTION_SEND_MESSAGE, ChatService } from '@/utils'
import { GptMessage } from '@/components/GptMessage'
function Stream() {
  const [name, setName] = useState('anonymous')
  const [messages, sendMessage, money, otherMoney, gptMessage, status] =
    ChatService({
      name: '管理人',
      message: `ようこそ、${name}さん`,
      action: ACTION_SEND_MESSAGE,
    })

  return (
    <div>
      <div className={'d-flex flex-column justify-content-between m-2'}>
        <div>
          {/*<Header />*/}
          <GptMessage msg={gptMessage}></GptMessage>
          <ProgressBar cpu={status} />
        </div>
        <div>
          <div
            className={'d-flex flex-row justify-content-evenly'}
            style={style.back}
          >
            <Player></Player>

            <Chat
              name={name}
              messages={messages}
              money={false}
              otherMoney={false}
              sendMessage={sendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stream
const style = {
  header: {
    flex: '1',
    fontSize: '3rem',
    fontFamily: 'DotGothic16',
  },
  title: {
    fontSize: '30px',
    fontWeight: 'bold',
  },
  userIcon: {
    height: '50px',
    borderRadius: '50%',
  },
  back: {
    backgroundColor: '#f0f0f0b0',
    paddingTop: '1rem',
  },
}
