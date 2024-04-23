// import axios from "axios";

import { apiPost } from "../../../server";

const authorization = async (login, password) => {

  // const res = await axios.get('https://65a8c529219bfa3718678849.mockapi.io/auth');

  // return res.data[0];

  const res = await apiPost('/api/token/', {
    "login": login,
    "password": password
  })

  return res;
};


export default authorization;