import { apiPostToken } from "../../server";

const cancelReservation = async (id, token) => {

  const res = await apiPostToken('/api/end_booking/', {
    "parking_lot": id,
  }, token)

  return res;
};


export default cancelReservation;