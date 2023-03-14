import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { Message } from '@/components/Message'
import {
  ACTION_SEND_MASAKARI,
  ACTION_SEND_MESSAGE,
  ChatPropsType,
  ChatService,
  KEY_SEND_MONEY,
} from '@/utils'
import { Money } from '@/components/Money'
import Sound from '/src/money-drop2.mp3'
import useSound from 'use-sound'
import Sound2 from '/src/clearing1.mp3'
import chatStyle from './Chat.module.css'
import Masakari from '../masakari.png'

interface Props {
  name: string
  messages: boolean | ChatPropsType[] | ((props: ChatPropsType) => void)
  money: boolean
  otherMoney: boolean
  sendMessage: boolean | ChatPropsType[] | ((props: ChatPropsType) => void)
  isThrowingMasakari: boolean
}

export interface Emotions {
  joy: number
  sadness: number
  anticipation: number
  surprise: number
  anger: number
  fear: number
  disgust: number
  trust: number
}

// const initState: Props = { name: '', text: '', money: false, otherMoney: false }

interface ChatProps {
  name: string
  message: string
  emotions: Emotions
}

export const Chat = ({
  name,
  messages,
  money,
  otherMoney,
  sendMessage,
  isThrowingMasakari,
}: Props) => {
  const [play, { stop, pause }] = useSound(Sound)
  const [play2] = useSound(Sound2)

  const scrollBottomRef = useRef<HTMLDivElement>(null)
  const [text, setText] = useState('')

  useEffect(() => {
    console.log('dispatch')
    if (otherMoney) play2()
  }, [otherMoney])

  const submitMessage = () => {
    if (text.length === 0) return
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    sendMessage({
      message: text,
      name: name,
      action: ACTION_SEND_MASAKARI,
    })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    sendMessage({
      message: text,
      name: name,
      action: ACTION_SEND_MESSAGE,
    })

    setText('')
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleInputChange = (e) => {
    setText(e.target.value)
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleButtonClick = () => {
    submitMessage()
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleOnKeydown = (event) => {
    if (event.keyCode == 13) {
      submitMessage()
    }
  }
  useLayoutEffect(() => {
    if (scrollBottomRef && scrollBottomRef.current) {
      scrollBottomRef?.current?.scrollIntoView()
    }
  })
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (
    <div
      style={style.body}
      className={'d-flex flex-column justify-content-between w-25'}
    >
      {money ? <Money></Money> : <></>}
      <div className={'overflow-scroll mh-100'} style={style.listBox}>
        <ul>
          {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            messages.map((msg: ChatProps, idx: number) => {
              return (
                <Message
                  key={idx}
                  name={msg.name}
                  message={msg.message}
                  emotions={msg.emotions}
                />
              )
            })
          }
          <div ref={scrollBottomRef}></div>
        </ul>
      </div>
      <div>
        <div className={'input-group mb-3'}>
          <input
            type="text"
            placeholder="メッセージ"
            value={text}
            className={'form-control'}
            onChange={handleInputChange}
            onKeyDown={handleOnKeydown}
          />
          <button disabled={!text} onClick={handleButtonClick}>
            送信
          </button>
          {isThrowingMasakari ? (
            <div className={chatStyle['fade-in-image']}>
              <img src={Masakari} />
            </div>
          ) : (
            <></>
          )}
        </div>
        {/*<button*/}
        {/*  className={'btn btn-lg btn-warning w-100'}*/}
        {/*  onClick={handleMoneyClick}*/}
        {/*>*/}
        {/*  投げ銭*/}
        {/*</button>*/}
      </div>
    </div>
  )
}

const style = {
  body: {
    height: '700px',
  },
  listBox: {},
}
