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
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error);
      return error.response.status;

    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      return "no response";
    } 
    console.log(error.config);
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