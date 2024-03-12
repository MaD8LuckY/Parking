import styleAPSection from './CSS/AdminProfileSection.module.css'

import Notification from '../UI/Notification';
import FormAdminProfile from '../Forms/FormAdminProfile';

const AdminProfileSection = () => {

  return (
    <main className={styleAPSection.main}>
      <section >
        <FormAdminProfile />
      </section>
      <Notification/>
    </main>
  )

}

export default AdminProfileSection;