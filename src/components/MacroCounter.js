import React from "react";
import '../styles/components/MacroCounter.css'
import PropTypes from 'prop-types'

function MacroCounter(props){
    return(
        <div className="counterCard">
            <img src={props.icon} alt={props.alt}></img>
            <div>
                <p className="counterText">{props.counterData}<span className="counterText">{props.counterUnit}</span></p>
                <p className="macroType">{props.macroType}</p>
            </div>
        </div>
    )

}

export default MacroCounter
MacroCounter.propTypes = {
	icon: PropTypes.string.isRequired,
    counterData:PropTypes.number.isRequired,
    counterUnit: PropTypes.string.isRequired,
    macroType: PropTypes.string.isRequired
};