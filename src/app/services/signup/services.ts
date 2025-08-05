import ServiceInstance from "../serviceInstance";
import URL from "./url";

const Services = {
    createUser: async (data:any) => {
        const userUrl = URL.createUser;
        try {
            const response = await ServiceInstance.post(userUrl, data);
            return response;
        } catch (error) {
            throw error;
        }
    },


    login: async (data:any) => {
        const loginUrl = URL.login;
        try {
            const response = await ServiceInstance.post(loginUrl, data);
            return response;
        } catch (error) {
            throw error;
        }
    }
}
export default Services;
