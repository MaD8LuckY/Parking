import styleTooltip from './CSS/Tooltip.module.css'

import noti from '../images/noti.svg';
import { useState } from 'react';

const Tooltip = ({data}) => {
  const [open, setOpen] = useState(false)

    return(
      <span className={styleTooltip.container}>
        {open && <span className={styleTooltip.tooltip}>{data}</span>}
        <img 
        src={noti} 
        alt="" 
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}/>
      </span>
    )
}

export default Tooltip;