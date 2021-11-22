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
          return error.response.status;
        } else if (error.message === "Network Error") {
          return "no response";
        } else {
            return "error"
        }
    }
};

export const getUserActivity = async (id) => {
    try {
        const response = await instance.get(`/${id}/activity`);
        console.log(response)
        //Format data to have the number of the weekday in the response.
        const newData = response.data.data.sessions.map(session => ({number: response.data.data.sessions.indexOf(session)+1 ,...session}))
        return newData;
    } catch (error) {
        if (error.response) {
          return error.response.status;
        } else if (error.request) {
          return "no response";
        } else {
            return "error"
        }
    }
};

export const getUserPerformance = async (id) => {
    try {
        const response = await instance.get(`/${id}/performance`);
        console.log(response)
        const newData = response.data.data.data.map((data) => {
            switch (data.kind) {
                case 1:
                    return { ...data, kind: 'Cardio' };
                case 2:
                    return { ...data, kind: 'Energie' };
                case 3:
                    return { ...data, kind: 'Endurance' };
                case 4:
                    return { ...data, kind: 'Force' };
                case 5:
                    return { ...data, kind: 'Vitesse' };
                case 6:
                    return { ...data, kind: 'Intensité' };
                default:
                    return { ...data};
            }
        });
        return newData;
    } catch (error) {
        if (error.response) {
          return error.response.status;
        } else if (error.request) {
          return "no response";
        } else {
            return "error"
        }
    }
    
};

export const getUserSessions = async (id) => {
    try {
        const response = await instance.get(`/${id}/average-sessions`);
        console.log(response)
        const newData = response.data.data.sessions.map((session) => {
            switch (session.day) {
                case 1:
                    return { ...session, day: 'L' };
                case 2:
                    return { ...session, day: 'M' };
                case 3:
                    return { ...session, day: 'M' };
                case 4:
                    return { ...session, day: 'J' };
                case 5:
                    return { ...session, day: 'V' };
                case 6:
                    return { ...session, day: 'S' };
                case 7:
                    return { ...session, day: 'D' };

                default:
                    return { ...session};
            }
            
        });
        const index0 = {
            day: "",
            sessionLength: 1
        };
        const index8 = {
            day: "",
            sessionLength: 100
        }
        newData.unshift(index0);
        newData.push(index8)
        return newData;
    } catch (error) {
        if (error.response) {
          return error.response.status;
        } else if (error.request) {
          return "no response";
        } else {
            return "error"
        }
    } 
    
};