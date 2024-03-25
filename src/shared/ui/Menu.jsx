import { useRef, useState } from 'react';
import { NavLink } from "react-router-dom";

import { dropdownData } from '../constants/drop-down';
import { navData } from '../constants/nav-data';
import styleMenu from './CSS/Menu.module.css';

const setActive = ({ isActive }) => isActive ? styleMenu.liActive : styleMenu.li;


const DropdownMenu = () => {
  const [open, setOpen] = useState(false);

  const menuRef = useRef();
  const pRef = useRef();

  window.addEventListener('click', (e) => {
    if (e.target !== menuRef.current && e.target !== pRef.current) {
      setOpen(false);
    }
  })

  return (
    <div>
      <p
        ref={pRef}
        className={styleMenu.p}
        onClick={() => setOpen(!open)}
        style={{ color: open ? '#3B71C4' : '#336FEE' }}
      >
        Личный кабинет
      </p>
      {open &&
        <div
          ref={menuRef}
          className={styleMenu.menu}
          >
          {/* {
            navData.map((menu) => {
              return <NavLink to={menu.path} className={setActive}>{menu.name}</NavLink>
            })
          }
          <hr /> */}
          {
            dropdownData.map((menu) => {
              return <NavLink to={menu.path} className={setActive} key={menu.name}>{menu.name}</NavLink>
            })
          }
        </div>
      }

    </div>
  )
};

export default DropdownMenu;