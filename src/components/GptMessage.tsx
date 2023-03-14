import { Emotions } from '@/layouts/Chat'
import { css } from '@emotion/react'

interface Props {
  msg: string
}

const initState = {
  name: '',
  message: '',
  emotions: {
    joy: 0,
    sadness: 0,
    anticipation: 0,
    surprise: 0,
    anger: 0,
    fear: 0,
    disgust: 0,
    trust: 0,
  },
}
export const GptMessage = ({ msg }: Props) => {
  return (
    <div
      className={
        'd-flex flex-column justify-content-between align-items-center'
      }
    >
      <p css={titleStyle}>
        サーバーからの煽りに負けずにまさかりを投げてサーバーを倒せ
      </p>
      <p
        style={{
          fontWeight: '700',
        }}
      >
        <div className={'min-vw-100'}>
          <p css={electricStyle}>
            <span> {msg}</span>
          </p>
        </div>
      </p>
    </div>
  )
}

const Color = {
  Joy: 'yellow',
  Sadness: '#77FFFF',
  Anticipation: 'yellow',
  Surprise: 'red',
  Anger: 'red',
  Fear: 'blue',
  Disgust: 'red',
  Trust: 'yellow',
}

function colorChanger(emotions: Emotions) {
  const arr = [
    {
      key: 'joy',
      value: emotions.joy,
    },
    {
      key: 'sadness',
      value: emotions.sadness,
    },
    {
      key: 'anticipation',
      value: emotions.anticipation,
    },
    {
      key: 'surprise',
      value: emotions.surprise,
    },
    {
      key: 'anger',
      value: emotions.anger,
    },
    {
      key: 'fear',
      value: emotions.fear,
    },
    {
      key: 'disgust',
      value: emotions.disgust,
    },
    {
      key: 'trust',
      value: emotions.trust,
    },
  ]
  const result = arr.map(function (p) {
    return p.value
  })

  let emotion = ''
  arr.forEach((a) => {
    if (a.value === Math.max.apply(null, result)) {
      if (Math.max.apply(null, result) < 0.1) {
        emotion = ''
        return
      }
      emotion = a.key
    }
  })

  switch (emotion) {
    case 'joy':
      return Color.Joy
    case 'sadness':
      return Color.Sadness
    case 'anticipation':
      return Color.Anticipation
    case 'surprise':
      return Color.Surprise
    case 'anger':
      return Color.Anger
    case 'fear':
      return Color.Fear
    case 'disgust':
      return Color.Disgust
    case 'trust':
      return Color.Trust
    default:
      return '#e0e0e0'
  }
}

const style = {
  sub: {
    fontSize: '0.7em',
    fontWeight: '700',
  },
}
const electricStyle = css`
  overflow: hidden;
  position: relative;
  color: #ffb400;
  font-size: 3em;
  font-weight: bold;
  background: #333333;
  :after {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(#0a0600 1px, transparent 0px),
      linear-gradient(0, #0a0600 1px, transparent 1px);
    background-image: -webkit-linear-gradient(#0a0600 1px, transparent 0px),
      -webkit-linear-gradient(0, #0a0600 1px, transparent 1px);
    background-size: 2px 2px;
    z-index: 10;
  }

  /* CSS3アニメーションでスクロール */

  span {
    display: inline-block;
    white-space: nowrap;
    padding-left: 100%;
    -webkit-animation-name: marquee;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-duration: 12s;
    -moz-animation-name: marquee;
    -moz-animation-timing-function: linear;
    -moz-animation-iteration-count: infinite;
    -moz-animation-duration: 12s;
    animation-name: marquee;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 12s;
  }

  @-webkit-keyframes marquee {
    from {
      -webkit-transform: translate(0%);
    }
    99%,
    to {
      -webkit-transform: translate(-100%);
    }
  }
  @-moz-keyframes marquee {
    from {
      -moz-transform: translate(0%);
    }
    99%,
    to {
      -moz-transform: translate(-100%);
    }
  }
  @keyframes marquee {
    from {
      transform: translate(0%);
    }
    99%,
    to {
      transform: translate(-100%);
    }
  }
`

const backgroundStyle = css`
  background-image: linear-gradient(#0a0600 1px, transparent 0px),
    linear-gradient(0, #0a0600 1px, transparent 1px);
  background-image: -webkit-linear-gradient(#0a0600 1px, transparent 0px),
    -webkit-linear-gradient(0, #0a0600 1px, transparent 1px);
`

const titleStyle = css`
  font-size: 2em;
  font-family: 'DotGothic16';
`
