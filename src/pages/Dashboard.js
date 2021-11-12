import React from "react";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import { getUserData } from "../service/ApiClient";
import DashboardHeader from "../components/DashboardHeader"
import SessionsChart from "../components/charts/SessionsLineChart";
import ActivityChart from "../components/charts/ActivityBarChart";
import PerformanceChart from "../components/charts/PerformanceRadarChart";
import '../styles/pages/Dashboard.css';


function Dashboard(props){

    const [data, setData] = useState([]);
    const {userInfos} = data

    const id = props.match.params.id;

    const getInfos = async () => {
        const request = await getUserData(id);
        setData(request);
    }

    useEffect( () => {
        getInfos()
    },[])

    console.log(data)
    if(data.length === 0) return null

    return( 
        <main>
            <Sidebar />
            <section className="dashboardContent">
                <DashboardHeader username={userInfos.firstName} />
                <ActivityChart id={id} />
                <div className="secondaryCharts">
                    <SessionsChart id={id} />
                    <PerformanceChart id={id} />
                </div>
            </section>
        </main>

    )
}

export default Dashboard;