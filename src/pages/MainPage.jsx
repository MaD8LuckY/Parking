import FormBooking from '../containers/Forms/FormBooking';
import FormNoBooking from '../containers/Forms/FormNoBooking';
import Header from '../containers/Header';
import MainSection from '../containers/MainSection';



const Main = () => {
  return(
    <>
      <Header/>
      <MainSection />
      <FormBooking/> 
      <FormNoBooking/>
    </>
  )
}

export default Main;