
import axios from 'axios';

const ServiceInstance = {
    get: async (url: string) => {
        const response = await axios.get(url)
        return response.data
    },
    post: async (url: string, data: any) => {
        const response = await axios.post(url, data)
        return response.data
    }
}

export default ServiceInstance;