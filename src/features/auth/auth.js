import axios from "axios";

const authorization = async () => {

  const res = await axios.get('https://65a8c529219bfa3718678849.mockapi.io/auth');

  return res.data[0];

};


export default authorization;