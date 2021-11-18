import React from "react";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import { getUserData } from "../service/ApiClient";
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
    const {userInfos, keyData} = data

    const id = props.match.params.id;

    const getInfos = async () => {
        const request = await getUserData(id);
        setData(request);
        console.log(request)
        setScore([
            { score: request.todayScore || request.score }
        ]);
    }

    useEffect( () => {
        getInfos()
    },[])
 
    if(data.length === 0) return null

    return( 
        <main>
            <Sidebar />
            <div className="dashboardContent">
                <DashboardHeader username={userInfos.firstName} />
                <div className="wrapper">
                <section className="secondaryCharts">
                    <ActivityChart id={id} />
                   <div className="charts"> 
                        <SessionsChart id={id} />
                        <PerformanceChart id={id} />
                        <ScoreChart data={score} />
                    </div>
                </section>
                <section className="macroContainer">
                    <MacroCounter icon={Calorie} counterData={keyData.calorieCount} counterUnit="kCal" macroType="Calories"/>
                    <MacroCounter icon={Protein} counterData={keyData.proteinCount} counterUnit="g" macroType="Protéines"/>
                    <MacroCounter icon={Carbs} counterData={keyData.carbohydrateCount} counterUnit="g" macroType="Glucides"/>
                    <MacroCounter icon={Fat} counterData={keyData.lipidCount} counterUnit="g" macroType="Lipides"/>
                </section>
                </div>
            </div>
        </main>

    )
}

export default Dashboard;