import axios from 'axios'
import { useEffect, useState } from 'react'

const proggressApi = '/status'

interface Props {
  name: string
  cpu: string | number | boolean | Props[] | ((props: Props) => void)
  memory: number
  traffic: number
}

const intervalMs = 6000

export const ProgressBar = ({ cpu, memory, traffic, name }: Props) => {
  // const DEATH_API_URL =
  //   import.meta.env.VITE_DEATH_API_URL || 'http://localhost:8081'

  // const instance = axios.create({
  //   baseURL: DEATH_API_URL,
  // })
  // const [count, setCount] = useState(0)
  // const [progress, setProgress] = useState({
  //   name: 'デスマTV',
  //   cpu: 11.4514,
  //   memory: 11.514,
  //   traffic: 114514,
  // })
  // useEffect(() => {
  //   instance
  //     .get(proggressApi)
  //     .then((response) => {
  //       setProgress(response.data)
  //     })
  //     .catch(() => {
  //       console.log('通信に失敗しました')
  //     })
  // }, [])
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     instance
  //       .get(proggressApi)
  //       .then((response) => {
  //         setProgress(response.data)
  //         setCount(count + 1)
  //       })
  //       .catch(() => {
  //         console.log('通信に失敗しました')
  //       })
  //   }, intervalMs)
  //
  //   return () => {
  //     clearInterval(intervalId)
  //   }
  // }, [progress])

  return (
    <div>
      <p style={style.header}>サーバーのHP</p>
      <progress
        id="issue_progress"
        max="1"
        value={1.0 - Number(cpu) / 100.0}
        className={'w-100'}
        style={style.bar}
      ></progress>
    </div>
  )
}
const style = {
  bar: {
    height: '40px',
  },
  header: {
    marginBottom: '0',
    fontSize: '1.5em',
    fontFamily: 'DotGothic16',
    fontWeight: 600,
  },
}
