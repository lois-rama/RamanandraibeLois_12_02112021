import React from "react";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { getUserData, getUserActivity, getUserPerformance, getUserSessions } from "../service/ApiClient";
import DashboardHeader from "../components/DashboardHeader"
import MacroCounter from "../components/MacroCounter";
import SessionsChart from "../components/charts/SessionsLineChart";
import ActivityChart from "../components/charts/ActivityBarChart";
import ScoreChart from "../components/charts/ScorePieChart";
import PerformanceChart from "../components/charts/PerformanceRadarChart";
import Calorie from '../img/calorie_icon.svg'
import Carbs from '../img/carbs-icon.svg'
import Fat from '../img/fat-icon.svg'
import Protein from '../img/protein-icon.svg'

import '../styles/pages/Dashboard.css';


function Dashboard(props){

    const [data, setData] = useState([]);
    const [score, setScore] = useState([]);
    const [session, setSession] = useState([]);
    const [activity, setActivity] = useState([]);
    const [performance, setPerformance] = useState([]);

    const id = props.match.params.id;

    const getInfos = async () => {
        const request = await getUserData(id);
        setData(request);
        setScore([{ score: request.todayScore || request.score }]);

        const activityData = await getUserActivity(id);
        setActivity(activityData)

        const sessionData =  await getUserSessions(id);
        setSession(sessionData)

        const performanceData = await getUserPerformance(id);
        setPerformance(performanceData)
        
    }

    useEffect( () => {
        getInfos()
        return () => setData([]);
    },[])
 
    if(data.length === 0 || activity.length === 0 || session.length === 0) return null;

    //Handle errors on client-side.
    console.log(data)
    if(data === 404) return <Redirect to="/404" />
    if(data === "no response" || data === "error" ) return <p>Service indisponible.</p>

    return( 
        <main>
            <Sidebar />
            <div className="dashboardContent">
                <DashboardHeader username={data.userInfos.firstName} />
                <div className="wrapper">
                <section className="secondaryCharts">
                    <ActivityChart id={id} data={activity} />
                   <div className="charts"> 
                        <SessionsChart id={id} data={session}/>
                        <PerformanceChart id={id} data={performance} />
                        <ScoreChart data={score} />
                    </div>
                </section>
                <section className="macroContainer">
                    <MacroCounter icon={Calorie} counterData={data.keyData.calorieCount} counterUnit="kCal" macroType="Calories"/>
                    <MacroCounter icon={Protein} counterData={data.keyData.proteinCount} counterUnit="g" macroType="Protéines"/>
                    <MacroCounter icon={Carbs} counterData={data.keyData.carbohydrateCount} counterUnit="g" macroType="Glucides"/>
                    <MacroCounter icon={Fat} counterData={data.keyData.lipidCount} counterUnit="g" macroType="Lipides"/>
                </section>
                </div>
            </div>
        </main>

    )
}

export default Dashboard;