import FormCreateAdmin from '../../widgets/form-create-admin/FormCreateAdmin';
import NotificationChat from '../../widgets/chat-noti/NotificationChat';
import styleCAP from './CreateAdminPage.module.css'

const CreateAdminPage = () => {
  return (
    <main className={styleCAP.main}>
      <FormCreateAdmin />
      <NotificationChat />
    </main>
  )
}

export default CreateAdminPage;