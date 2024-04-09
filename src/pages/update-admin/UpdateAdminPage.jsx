import FormUpdateAdmin from '../../widgets/form-update-admin/FormUpdateAdmin';
import NotificationChat from '../../widgets/chat-noti/NotificationChat'

import styleUAP from './UpdateAdminPage.module.css'

const UpdateAdminPage = () => {
  return (
    <main className={styleUAP.main}>
      <FormUpdateAdmin />
      <NotificationChat />
    </main>
  )
}

export default UpdateAdminPage;