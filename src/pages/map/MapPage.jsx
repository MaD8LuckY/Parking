// import FormBooking from '../Forms/FormBooking';
// import FormNoBooking from '../Forms/FormNoBooking';
import MapSection from '../../widgets/section-map/MapSection';
import styleMP from './MapPage.module.css'

// import { useSelector } from "react-redux";
// import { useEffect, useState } from 'react';

const MapPage = () => {

  return (
    <main className={styleMP.main}>
      <MapSection />
      {/* <FormBooking />
      <FormNoBooking /> */}
    </main>
  )
}

export default MapPage;