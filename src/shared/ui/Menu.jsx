import { useRef, useState } from 'react';
import { NavLink } from "react-router-dom";

import { dropdownData } from '../constants/drop-down';
import { navData } from '../constants/nav-data';
import styleMenu from './CSS/Menu.module.css';

const setActive = ({ isActive }) => isActive ? styleMenu.liActive : styleMenu.li;


const DropdownMenu = () => {
  const [openShort, setOpenShort] = useState(false);
  const [openFull, setOpenFull] = useState(false);

  const menuRefShort = useRef();
  const pRefShort = useRef();
  const menuRefFull = useRef();
  const pRefFull = useRef();

  window.addEventListener('click', (e) => {
    if (e.target !== menuRefShort.current && e.target !== pRefShort.current) {
      setOpenShort(false);
    }
  })
  window.addEventListener('click', (e) => {
    if (e.target !== menuRefFull.current && e.target !== pRefFull.current) {
      setOpenFull(false);
    }
  })

  return (
    <>
      <div className={styleMenu.menuShort}>
        <p
          ref={pRefShort}
          className={styleMenu.p}
          onClick={() => setOpenShort(!openShort)}
          style={{ color: openShort ? '#3B71C4' : '#336FEE' }}
        >
          Личный кабинет
        </p>
        {openShort &&
          <div
            ref={menuRefShort}
            className={styleMenu.menu}
          >
            {
              dropdownData.map((menu) => {
                return <NavLink to={menu.path} className={setActive} key={menu.name}>{menu.name}</NavLink>
              })
            }
          </div>
        }

      </div>

      <div className={styleMenu.menuFull}>
        <p
          ref={pRefFull}
          className={styleMenu.p}
          onClick={() => setOpenFull(!openFull)}
          style={{ color: openFull ? '#3B71C4' : '#336FEE' }}
        >
           ☰
        </p>
        {openFull &&
          <div
            ref={menuRefFull}
            className={styleMenu.menu}
          >
            {
            navData.map((menu) => {
              return <NavLink to={menu.path} key={menu.name} className={setActive}>{menu.name}</NavLink>
            })
          }
          <hr />
            {
              dropdownData.map((menu) => {
                return <NavLink to={menu.path} className={setActive} key={menu.name}>{menu.name}</NavLink>
              })
            }
          </div>
        }

      </div>
    </>
  )
};

export default DropdownMenu;