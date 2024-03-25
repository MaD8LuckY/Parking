import axios from "axios";

// const entrance = (e) => { // api
//   e.preventDefault()

//   const authorization = async () => {
//     //   if (log === '' || pass === '') {
//     //     setErr('noData')
//     //   }
//     //   else {
//     //   await apiPost('/api/token/', {
//     //     "login": log,
//     //     "password": pass,
//     //     "first_name": "admin",
//     //     "second_name": "admin"
//     //   }
//     //   ).then(res => {
//     //     // if (res.auth === 1) {
//     //     //   setErr('no')
//     //     navigate('main', { replace: 'true' })
//     //     // }
//     //     // else if (res.auth === 0) {
//     //     //   setErr('errData')
//     //     // }
//     //   }
//     //   ).catch(res => setErr('errSys'));
//     // }

//     const res = await axios.get('https://65a8c529219bfa3718678849.mockapi.io/auth');

//     // if (res.data[0].auth === 1) {
//     //   setErr('no')
//     //   navigate('main/map', { replace: 'true' })
//     // }
//     // else if (res.data[0].auth === 0) {
//     //   setErr('errData')
//     // }

//     console.log(res.data[0]);
//     return res.data[0];

//   };

//   authorization()
// }

const authorization = async () => {

  const res = await axios.get('https://65a8c529219bfa3718678849.mockapi.io/auth');

  // if (res.data[0].auth === 1) {
  //   setErr('no')
  //   navigate('main/map', { replace: 'true' })
  // }
  // else if (res.data[0].auth === 0) {
  //   setErr('errData')
  // }

  return res.data[0];

};


export default authorization;