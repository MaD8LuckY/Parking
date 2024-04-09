import styleSelect from './CSS/Select.module.css'
import toggleDown from '../images/toggleDown.svg'
import toggleUp from '../images/toggleUp.svg'
import { useState } from 'react'

const Select = ({ options, onChange, activeFloor}) => {
  const [open, setOpen] = useState(false)

  const onClickHeader = () => {
    setOpen(prev => !prev)
  }

  const onClickOption = (e) => {
    setOpen(prev => !prev)
    onChange(e.target.innerHTML) // Call onChange here
  }

  return (
    <div className={styleSelect.select}>
      <div className={styleSelect.selectHeader} onClick={onClickHeader}>
        <span className={styleSelect.selectCurrent}>{activeFloor}</span>
        <div className={styleSelect.selectIcon}><img src={open ? toggleUp : toggleDown} alt="" /></div>
      </div>

      {
        open && <div className={styleSelect.selectBody}>
          {
            options.map((opt, index) => {
              return <div className={styleSelect.selectItem} onClick={onClickOption} key={opt} id={index}>{opt}
              </div>
            })
          }
        </div>
      }

    </div>
  )
}

export default Select;