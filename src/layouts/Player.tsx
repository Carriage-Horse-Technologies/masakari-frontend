import { LegacyPage } from '@/components/LegacyPage'

type Props = {
  isBreakingWindow: boolean
}

const Player = ({ isBreakingWindow }: Props) => {
  return (
    <div
      className={'w-100 h-100 d-flex align-items-center justify-content-center'}
    >
      <LegacyPage isBreakingWindow={isBreakingWindow} />
    </div>
  )
}

export default Player
