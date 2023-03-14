import MasakariImg from '../../masakari.png'
import chatStyle from './Masakari.module.css'

const Masakari = () => {
  return (
    <div className={chatStyle['throwing-masakari']}>
      <img src={MasakariImg} />
    </div>
  )
}

export default Masakari
