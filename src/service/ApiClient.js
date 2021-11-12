import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000/user"
});

export const getUserData = async (id) => {
    try {
        const response = await instance.get(`/${id}`);
        console.log(response)
        return response.data.data;
    } catch (error) {
        console.log(error)
    }
    
};

export const getUserActivity = async (id) => {
    try {
        const response = await instance.get(`/${id}/activity`);
        console.log(response)
        return response.data.data;
    } catch (error) {
        console.log(error)
    }
    
};

export const getUserPerformance = async (id) => {
    try {
        const response = await instance.get(`/${id}/performance`);
        console.log(response)
        return response.data.data;
    } catch (error) {
        console.log(error)
    }
    
};

export const getUserSessions = async (id) => {
    try {
        const response = await instance.get(`/${id}/average-sessions`);
        console.log(response)
        return response.data.data;
    } catch (error) {
        console.log(error)
    }
    
};