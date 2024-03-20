import styleNavigation from './CSS/Navigation.module.css'
import { useDispatch, useSelector } from "react-redux";
import { setNameSection } from "../../features/section/sectionSlice";

const Navigation = () => {
  const navs = ['Карты', 'Аналитика', 'Создание кабинета'];

  const dispatch = useDispatch()
  const section = useSelector((state) => state.section.nameSection)

  return (
    <nav>
      <ul className={styleNavigation.nav}>
        {
          navs.map((nav) => (
            <li
              key={nav}
              onClick={() => {
                dispatch(setNameSection(`${nav}`))
              }}
              className={nav === `${nav}` && section === `${nav}` ? styleNavigation.liActive : styleNavigation.li}
              >{nav}</li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navigation;