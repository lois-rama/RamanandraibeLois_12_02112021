import { React } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip,Rectangle} from 'recharts';
import '../../styles/components/SessionsLineChart.css'
import PropTypes from 'prop-types';

function SessionsChart(props) {

    const CustomToolTip = (props) => {
        const { active, payload, label } = props
        if (active && payload && payload.length) {
            return (
                <div className={label === "" ? "hidden" : "tooltip"}>
                    <p className="tooltipText">{`${payload[0].value} min`}</p>
                </div>
        )
    }

    return null;
}
    const CustomCursor = (props) => {
        const {points, width, height} = props;
        const { x, y } = points[0];

        return (
            <Rectangle
            fill="rgba(0, 0, 0, 0.07)"
            x={x}
            y={y}
            width={width}
            height={height}
            />  
        );
  };
    const CustomDotActive = (props) => {
        const { cx, cy, payload } = props;
        if (payload.day === "") {
            return null   
    }
        return(
            <svg x={cx - 10} y={cy - 10} width={200} height={200} fill="green" viewBox="0 0 300 300">
                <circle cx="15" cy="15" r="5" stroke="rgba(255,255,255, 0.4)" strokeWidth="10" fill="white"></circle>
            </svg>
        );
}

    return (
        <div className="lineChart">
            <h2 className="sessionsTitle">Durée moyenne des sessions</h2>
            <LineChart width={258} height={263} data={props.data} margin={{left:0, right:0, bottom:16}}>
                <XAxis dataKey="day" 
                    axisLine={false}
                    tickLine={false}
                    tick={{
                        fill : 'rgba(255, 255, 255, 0.6)',
                        fontSize: 12,
                    }}
                />
                <YAxis 
                    dataKey="sessionLength"
                    domain={["dataMin -20", "dataMax + 100"]}
                    hide={true}
                />
                <Tooltip 
                    content={<CustomToolTip/>}
                    cursor={<CustomCursor/>}

                />
                <Line 
                    dataKey="sessionLength" 
                    type="monotone"
                    stroke="rgba(255, 255, 255, 0.9)"
                    strokeWidth={2}
                    dot={false}
                    activeDot={<CustomDotActive/>}
            />
            </LineChart>
        </div>
    );
}

export default SessionsChart;
SessionsChart.propTypes = {
	data: PropTypes.array.isRequired,
};