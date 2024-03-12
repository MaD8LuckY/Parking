import FormBooking from '../Forms/FormBooking';
import FormNoBooking from '../Forms/FormNoBooking';
import Header from '../Header';
import MapSection from '../Sections/MapSection';
import AnaliticSection from '../Sections/AnaliticSections';
import CreateProfileSection from '../Sections/CreateProfileSection';
import AdminProfileSection from '../Sections/AdminProfileSection';

import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';

const Main = () => {
  const section = useSelector((state) => state.section.nameSection)

  const createSection = () => {
    switch (section) {
      case 'Карты':
        return <>
          <MapSection />
          <FormBooking />
          <FormNoBooking />
        </>
      case 'Аналитика':
        return <AnaliticSection />
      case 'Создание кабинета':
        return <CreateProfileSection />
      case 'Редактировать профиль':
        return <AdminProfileSection />
      default:
        return 0;
    }
  }

  return (
    <>
      <Header />
      {
        createSection()
      }
    </>
  )
}

export default Main;