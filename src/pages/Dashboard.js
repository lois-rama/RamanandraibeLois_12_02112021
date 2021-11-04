import React from "react";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import { getUserData } from "../service/ApiClient";
import DashboardHeader from "../components/DashboardHeader"
import '../styles/pages/Dashboard.css';

function Dashboard(props){
    const [data, setData] = useState([]);

    console.log(data.userInfos)

    const id = props.match.params.id;

    const getInfos = async () => {
        const request = await getUserData(id);
        console.log(request)
        setData(request.userInfos);
    }

    useEffect( () => {
        getInfos()
    },[])
    
    return( 
        <>
            <Sidebar />
            <main>
                <DashboardHeader username={data.firstName} />
            </main>
        </>
    )
}

export default Dashboard