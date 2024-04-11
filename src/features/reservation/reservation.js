import { apiPostToken } from "../../server";

const reservation = async (id, token) => {

  const res = await apiPostToken('/api/create_booking/', {
    "parking_lot": id,
  }, token)

  return res;
};


export default reservation;