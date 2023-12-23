import axios from "axios"

export const EndBookingService = {
  async getAll() {
    const responce = await axios.get('/api/endBooking')

    if (responce.status === 200) {
      return responce.data.message
    }
    else {
      alert("Ошибка")
    }

    
  }
} 