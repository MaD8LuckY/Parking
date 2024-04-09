import FormReservation from '../../widgets/form-reser/FormReservation';
import MapSection from '../../widgets/section-map/MapSection';
import styleMP from './MapPage.module.css'
import FormCancelReservation from '../../widgets/form-cancel-reser/FormCancelReservation';
import NotificationChat from '../../widgets/chat-noti/NotificationChat'

const MapPage = () => {

  return (
    <main className={styleMP.main}>
      <MapSection />
      <FormReservation/>
      <FormCancelReservation/>
      <NotificationChat />
    </main>
  )
}

export default MapPage;