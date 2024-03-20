import { useRef } from 'react';
import styleMenu from './CSS/Menu.module.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { setNameSection } from "../../features/section/sectionSlice";
import { useDispatch, useSelector } from "react-redux";


const DropdownMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const section = useSelector((state) => state.section.nameSection)

  const menus = ['Редактировать профиль', 'Выйти'];
  const menusFull = ['Карты', 'Аналитика', 'Создание кабинета','Редактировать профиль', 'Выйти'];

  const menuRef = useRef();
  const pRef = useRef();

  window.addEventListener('click', (e)=>{
    if(e.target !== menuRef.current && e.target !== pRef.current){
      setOpen(false);
    }
  })

  return (
    <div>
      <p
        ref={pRef}
        className={styleMenu.p}
        onClick={() => setOpen(!open)}
        style={{ color: open ? '#3B71C4' : '#336FEE' }}>
        Личный кабинет
      </p>
      {open &&
        <div
          ref={menuRef}
          className={styleMenu.menu}>
          <ul>
            {
              menus.map((menu) => (
                <li
                  key={menu}
                  onClick={() => {
                    setOpen(!open);
                    if(menu === 'Выйти'){
                      dispatch(setNameSection('Карты'))
                      navigate('/', { replace: 'true' })
                    }
                    if(menu === 'Редактировать профиль'){
                      dispatch(setNameSection('Редактировать профиль'))
                    }
                  }}
                  className={menu === `${menu}` && section === `${menu}` ? styleMenu.liActive : styleMenu.li}
                >{menu}</li>
              ))
            }
          </ul>
        </div>
      }

    </div>
  )
};

export default DropdownMenu;