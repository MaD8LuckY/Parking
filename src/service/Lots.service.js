import axios from "axios"

export const LotsService = {
    async getAll() {
        const responce = await axios.get('/api/users')

        if (responce.status === 200) {
            return responce.data
        }
        else {
            alert("Ошибка")
        }


    }
} 