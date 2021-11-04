import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000/user"
});

export const getUserData = async (id) => {
    try {
        const response = await instance.get(`/${id}`);
        console.log(response.data.data)
        return response.data.data;
    } catch (error) {
        console.log(error)
    }
    
};