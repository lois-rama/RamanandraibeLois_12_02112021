import React from "react";
import '../styles/components/DashboardHeader.css'

function DashboardHeader(props){
    return(
        <div className="messageWrapper">
            <h1 className="welcomeText">Bonjour <span className="userName">{props.username}</span></h1>
            <p className="congratsText">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
    )
}

export default DashboardHeader