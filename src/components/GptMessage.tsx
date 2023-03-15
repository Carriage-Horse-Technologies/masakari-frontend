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
    <div className={'d-flex flex-column justify-content-between'}>
      <p css={titleStyle}>
        サーバーからの煽りに負けずにまさかりを投げてサーバーを倒せ
      </p>
      <div
        className={'d-flex flex-row justify-content-between align-items-center'}
      >
        <div>
          <img
            className={'rounded-circle'}
            src="https://www.notchman.tech/_next/image?url=%2Fprofile.jpg&w=256&q=75"
            width={96}
            height={96}
            alt={'プロフィール画像'}
            style={{
              objectFit: 'cover',
              aspectRatio: '1/1',
            }}
          />
          <span css={notchStyle}> からの有り難いお言葉</span>
        </div>
        <p
          style={{
            fontWeight: '700',
          }}
        >
          <div css={viewStyle}>
            <p css={electricStyle}>
              <span> {msg}</span>
            </p>
          </div>
        </p>
      </div>
    </div>
  )
}

const viewStyle = css`
  width: 78vw;
`
const notchStyle = css`
  font-size: 1.2em;
  font-family: 'DotGothic16', cursive;
`
const electricStyle = css`
  overflow: hidden;
  position: relative;
  color: #ffb400;
  font-size: 2.5em;
  font-weight: bold;
  background: #333333;
  p {
    margin-bottom: 0;
  }
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
    -webkit-animation-duration: 16s;
    -moz-animation-name: marquee;
    -moz-animation-timing-function: linear;
    -moz-animation-iteration-count: infinite;
    -moz-animation-duration: 16s;
    animation-name: marquee;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 16s;
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
