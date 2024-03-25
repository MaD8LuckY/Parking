import { Outlet } from "react-router-dom"
import Header from '../widgets/header/Header'

const Layout = () => {
  return (
    <>
      <Header/>

      <Outlet />

    </>
  )
}

export default Layout;