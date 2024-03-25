import FormCreateUser from '../../widgets/form-create-user/FormCreateUser';
import NotificationChat from '../../widgets/chat-noti/NotificationChat';
import styleCUP from './CreateUserPage.module.css'

const CreateUserPage = () => {
  return (
    <main className={styleCUP.main}>
      <FormCreateUser />
      <NotificationChat />
    </main>
  )
}

export default CreateUserPage;