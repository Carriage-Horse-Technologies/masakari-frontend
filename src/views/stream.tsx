/* eslint-disable */
// @ts-nocheck
import { Chat } from '@/layouts/Chat'
import Header from '@/layouts/Header'
import Player from '@/layouts/Player'
import { useState } from 'react'
import { ProgressBar } from '@/components/ProgressBar'
import { ACTION_SEND_MESSAGE, ChatService } from '@/utils'
import { GptMessage } from '@/components/GptMessage'
import { css } from '@emotion/react'
function Stream() {
  const [name, setName] = useState('anonymous')
  const [
    messages,
    sendMessage,
    money,
    otherMoney,
    gptMessage,
    status,
    isThrowingMasakari,
    isBreakingWindow,
  ] = ChatService({
    name: '管理人',
    message: `ようこそ、${name}さん`,
    action: ACTION_SEND_MESSAGE,
  })

  return (
    <div>
      <div className={'d-flex flex-column justify-content-between m-2'}>
        <div>
          <GptMessage msg={gptMessage}></GptMessage>

          <ProgressBar cpu={status} />
        </div>
        <div>
          <div
            className={'d-flex flex-row justify-content-evenly'}
            style={style.back}
          >
            <div className={'w-75'} css={viewerStyle}>
              <Player isBreakingWindow={isBreakingWindow}></Player>
            </div>
            <Chat
              name={name}
              messages={messages}
              money={false}
              otherMoney={false}
              sendMessage={sendMessage}
              isThrowingMasakari={isThrowingMasakari}
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

const viewerStyle = css`
  margin: 2em 0;
  position: relative;
  padding: 0.5em 1.5em;
  border-top: solid 2px black;
  border-bottom: solid 2px black;
  :before,
  :after {
    content: '';
    position: absolute;
    top: -10px;
    width: 2px;
    height: -webkit-calc(100% + 20px);
    height: calc(100% + 20px);
    background-color: black;
  }
  :before {
    left: 10px;
  }
  :after {
    right: 10px;
  }
`
