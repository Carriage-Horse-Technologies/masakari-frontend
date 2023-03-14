import { css } from '@emotion/react'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
}

export const Modal = ({ show, setShow }: Props) => {
  if (show) {
    return (
      <div css={overlayStyle}>
        <div css={contentStyle}>
          <button
            css={closeButtonStyle}
            onClick={() => setShow(false)}
          ></button>

          <p css={textStyle}>
            今までありがとう！<br></br>その若さを活かしてものづくりを楽しんで！
          </p>
          <p css={textMiniStyle}>by 馬車馬テクノロジーズ</p>
          <div className={'d-flex flex-row justify-content-between'}>
            <img
              css={leftIconStyle}
              width={128}
              height={128}
              src={
                'https://objectstorage.ap-tokyo-1.oraclecloud.com/n/nr7eduszgfzb/b/image-bucket/o/allo%2Fcracker.gif'
              }
            ></img>
            <img
              css={rightIconStyle}
              width={128}
              height={128}
              src={
                'https://objectstorage.ap-tokyo-1.oraclecloud.com/n/nr7eduszgfzb/b/image-bucket/o/allo%2Fcracker.gif'
              }
            ></img>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}
const rightIconStyle = css`
  margin: 0 0 0 auto;
`
const leftIconStyle = css`
  transform: scale(-1, 1);
`
const overlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 200;

  display: flex;
  align-items: center;
  justify-content: center;
`

const contentStyle = css`
  z-index: 2000;
  width: 50%;
  padding: 1em;
  background: #fff;
`
const textStyle = css`
  font-size: 2em;
  font-family: 'DotGothic16', cursive;
  align-content: center;
  text-align: center;
`
const textMiniStyle = css`
  font-size: 1.4em;
  font-family: 'DotGothic16', cursive;
  align-content: center;
  text-align: center;
`

const closeButtonStyle = css`
  display: block;
  position: relative;
  width: 30px;
  margin: 0 0 0 auto;
  height: 30px;
  border: 2px solid #333; /* 枠の調整 */
  background: #fff; /* ボタンの背景色 */

  ::before,
  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3px; /* 棒の幅（太さ） */
    height: 27px; /* 棒の高さ */
    background: #333; /* バツ印の色 */
  }

  ::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  ::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`
