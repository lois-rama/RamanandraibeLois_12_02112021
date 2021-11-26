import React from 'react';
import {
    RadialBarChart,
    RadialBar,
    PolarAngleAxis,
  } from "recharts";
import '../../styles/components/ScorePieChart.css'
import PropTypes from 'prop-types'

/**
 * Goal Score percentage
 * @param props data fetch from the API
 * @returns {JSX.Element}
 */
function ScoreChart(props){
    if (props.data.length === 0) {
		return null;
	}

	return (
		<div className="scoreChart">
			<h2>Score</h2>
            <RadialBarChart width={268} height={268}
              innerRadius="65%"
              outerRadius="65%"
              barSize={10}
              data={props.data}
              startAngle={90}
              endAngle={450}
            >
            <PolarAngleAxis
              type="number"
              domain={[0, 1]}
              tick={false}
            />

            <RadialBar
              dataKey="score"
              fill="#FF0000"
              cornerRadius={10}
            />

            </RadialBarChart>
          <div className="scoreCircle">
			<p className="scoreGoalText">
				<span>{props.data[0].score * 100}%</span> <br></br>de votre<br></br> 
				objectif
			</p>
            </div>
		</div>
	);
}

export default ScoreChart
ScoreChart.propTypes = {
	data: PropTypes.array.isRequired,
};