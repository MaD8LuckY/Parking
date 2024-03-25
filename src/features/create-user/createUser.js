import axios from "axios";

const createUser = async () => {

  const res = await axios.get('https://65a8c529219bfa3718678849.mockapi.io/auth');
  return res.data[3];
  
//} 
};

export default createUser;