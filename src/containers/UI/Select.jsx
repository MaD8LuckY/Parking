import styleSelect from './CSS/Select.module.css'
import toggleDown from '../../images/Toggle-down.svg'
import toggleUp from '../../images/Toggle-up.svg'
import { useEffect, useState } from 'react'

const Select = ({ options, onChange }) => {
  const [open, setOpen] = useState(false)
  const [id, setId] = useState(1)

  let number = 0;

  const onClickHeader = () => {
    setOpen(prev => !prev)
  }

  const onClickOption = (e) => {
    setId(e.target.id)
    setOpen(prev => !prev)
    onChange(Number(e.target.id)) // Call onChange here
  }

  useEffect(() => {
    onChange(id) // Call onChange initially
  }, [])

  return (
    <div className={styleSelect.select}>
      <div className={styleSelect.selectHeader} onClick={onClickHeader}>
        <span className={styleSelect.selectCurrent}>{options[id-1]}</span>
        <div className={styleSelect.selectIcon}><img src={open ? toggleUp : toggleDown} alt="" /></div>
      </div>

      {
        open && <div className={styleSelect.selectBody}>
          {
            options.map((opt) => {
              number++;
              return <div className={styleSelect.selectItem} onClick={onClickOption} key={opt} id={number}>{opt}
              </div>
            })
          }
        </div>
      }

    </div>
  )
}

export default Select;