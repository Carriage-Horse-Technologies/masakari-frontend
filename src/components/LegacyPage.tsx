import Iframe from 'react-iframe'
import { useState, useEffect } from 'react'
import WaremadoPattern1 from '../waremado_pattern1.png'
import WaremadoPattern2 from '../waremado_pattern2.png'
import styled from 'styled-components'

type Props = {
  isBreakingWindow: boolean
}
let timer: number
export const LegacyPage = ({ isBreakingWindow }: Props) => {
  const [waremadosToRender, setWaremadosToRender] = useState([
    { offsetX: 0, offsetY: 0, key: 0, waremado: '' },
  ])

  const breakWindow = () => {
    if (waremadosToRender.length > 20) {
      waremadosToRender.shift()
    }

    const offsetX = Math.floor(Math.random() * 800)
    const offsetY = Math.floor(Math.random() * 200)
    const key = offsetX + Math.random() * 1000000
    const waremados = [WaremadoPattern1, WaremadoPattern2]

    waremadosToRender.push({
      offsetX,
      offsetY,
      key,
      waremado: waremados[Math.floor(Math.random() * waremados.length)],
    })

    setWaremadosToRender([...waremadosToRender])
  }

  useEffect(() => {
    if (isBreakingWindow) {
      setTimeout(() => {
        breakWindow()
      }, 1000)
      timer = setInterval(() => {
        setTimeout(() => {
          breakWindow()
        }, 1000)
      }, 2000)
    }

    return () => {
      clearInterval(timer)
    }
  }, [isBreakingWindow])

  return (
    <div className={'w-100 h-100'}>
      {waremadosToRender.map(({ key, waremado, offsetX, offsetY }) => {
        return (
          <WaremadoContainer key={key} offsetX={offsetX} offsetY={offsetY}>
            <img src={waremado} />
          </WaremadoContainer>
        )
      })}
      <Iframe
        id="legacy"
        url="http://legacy-stack.yukinissie.com/"
        width="100%"
        height="100%"
      />
    </div>
  )
}

const WaremadoContainer = styled.div<{ offsetX: number; offsetY: number }>`
  display: flex;
  position: absolute;
  top: ${(props) => props.offsetY}px;
  left: ${(props) => props.offsetX}px;
  transform: rotate(${(props) => props.offsetX}deg);
  z-index: 99;
  font-size: 48px;
  animation-name: falldown;
  animation-duration: 1s;
`
