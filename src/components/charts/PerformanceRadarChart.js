import { React } from 'react';
import { RadarChart,PolarGrid,Radar,PolarAngleAxis} from 'recharts';
import '../../styles/components/PerformanceRadarChart.css'
import PropTypes from 'prop-types'

/**
 * Performance radar
 * @param props data fetch from the API
 * @returns {JSX.Element}
 */
function PerformanceChart(props) {
    if (props.data.length === 0) {
		return null;
	}
    return (
        <div className ="radarChart">
                <RadarChart width={258} height={263} outerRadius='60%' data={props.data}>
                    <PolarGrid radialLines={false}/>
                    <PolarAngleAxis
                        dataKey='kind'
                        stroke='white'
                        tickLine={false}
                        tick={{ fontSize: 11 }}
                    />
                    <Radar
                        dataKey='value'
                        fill='#FF0101'
                        fillOpacity={0.7}
                    />
                </RadarChart>
        </div>
    );
}

export default PerformanceChart;
PerformanceChart.propTypes = {
	data: PropTypes.array.isRequired,
};