import axios from "axios";

const createAdmin = async () => {
  // if (login === '' || oldPassword === '' || newPassword === '' || doubleNewPassword === '') {
  //   setErr('noData')
  // }
  // else {
  // await apiPost('/api/token/', {
  //   "login": log,
  //   "password": pass,
  //   "first_name": "admin",
  //   "second_name": "admin"
  // }
  // ).then(res => {
  //   // if (res.auth === 1) {
  //   //   setErr('no')
  //   navigate('main', { replace: 'true' })
  //   // }
  //   // else if (res.auth === 0) {
  //   //   setErr('errData')
  //   // }
  // }
  // ).catch(res => setErr('errSys'));
  const res = await axios.get('https://65a8c529219bfa3718678849.mockapi.io/auth');

  return res.data[2];
  
};

export default createAdmin;