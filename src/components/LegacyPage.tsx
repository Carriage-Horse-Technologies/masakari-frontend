import Iframe from 'react-iframe'

export const LegacyPage = () => {
  return (
    <div className={'w-100 h-100'}>
      <Iframe
        id="legacy"
        url="http://legacy-stack.yukinissie.com/"
        width="100%"
        height="100%"
      />
    </div>
  )
}
