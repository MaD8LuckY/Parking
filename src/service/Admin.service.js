import axios from "axios"

export const AdminService = {
  async getAll() {
    const responce = await axios.get('/api/authorization')

    if (responce.status === 200) {
      return responce.data.auth
    }
    else {
      alert("Ошибка")
    }


  }
} 