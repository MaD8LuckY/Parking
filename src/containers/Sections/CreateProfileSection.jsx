import styleCPSection from './CSS/CreateProfileSection.module.css'

import Notification from '../UI/Notification';
import FormCreateProfile from '../Forms/FormCreateProfile';

const CreateProfileSection = () => {

  return (
    <main className={styleCPSection.main}>
      <section >
        <FormCreateProfile />
      </section>
      <Notification/>
    </main>
  )

}

export default CreateProfileSection;