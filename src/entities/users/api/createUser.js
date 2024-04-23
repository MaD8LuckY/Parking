//import axios from "axios";

import { apiPostToken } from "../../../server";

const createUser = async (firstName, secondName, letter, token) => {

  const res = await apiPostToken('/api/create_user/', {
    "login": letter,
    "first_name": firstName,
    "second_name": secondName
  }, token)

  return res;
  
};

export default createUser;