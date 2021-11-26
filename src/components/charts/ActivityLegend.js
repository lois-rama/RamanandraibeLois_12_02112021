/**
 * Activity Lengend
 * @returns {JSX.Element}
 */
function ActivityLegend(){
    return(
        <div className="activityLegend">
            <div className="chartUnits">
                <div className="legendDot"></div>
                <p>Poids (kg)</p>
            </div>
            <div className="chartUnits">
                <div className="legendDot red"></div>
                <p>Calories brûlées (kCal)</p>
            </div>
        </div>
    )
}

export default ActivityLegend