import styleSelect from './CSS/Select.module.css'
import toggleDown from '../images/toggleDown.svg'
import toggleUp from '../images/toggleUp.svg'
import { useEffect, useState } from 'react'

const Select = ({ options, onChange }) => {
  const [open, setOpen] = useState(false)
  const [id, setId] = useState(0)

  const onClickHeader = () => {
    setOpen(prev => !prev)
  }

  const onClickOption = (e) => {
    setId(e.target.id)
    setOpen(prev => !prev)
    onChange(e.target.innerHTML) // Call onChange here
  }

  useEffect(() => {
    onChange(id) // Call onChange initially
  }, [])

  return (
    <div className={styleSelect.select}>
      <div className={styleSelect.selectHeader} onClick={onClickHeader}>
        <span className={styleSelect.selectCurrent}>{options[id]}</span>
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