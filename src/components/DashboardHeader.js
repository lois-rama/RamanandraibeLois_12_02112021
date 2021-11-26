import React from "react";
import '../styles/components/DashboardHeader.css'
import PropTypes from 'prop-types'

/**
 * Dashboard Header, display Welcome message
 * @param props data fetch from the API
 * @returns {JSX.Element}
 */
function DashboardHeader(props){
    return(
        <header className="messageWrapper">
            <h1 className="welcomeText">Bonjour <span className="userName">{props.username}</span></h1>
            <p className="congratsText">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </header>
    )
}

export default DashboardHeader
DashboardHeader.propTypes = {
	username: PropTypes.string.isRequired,
};