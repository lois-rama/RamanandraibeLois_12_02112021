import { React } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import ActivityLegend from './ActivityLegend.js';

import '../../styles/components/ActivityBarChart.css'

function ActivityChart(props) {
    const CustomActivityTooltip = ({ active, payload }) => {
        if (active) {
            return (
                <div className="activityTooltip">
                    <p>{payload[0].value}kg</p>
                    <p>{payload[1].value}kCal</p>
                </div>
            );
        }
        return null;
    }

        return (
            <div className="activityContainer">
                <div className="chartHeader">
                    <h2>Activité quotidienne</h2>
                    <ActivityLegend/>
                </div>
                    <BarChart width={835} height={320}
                        margin={{top: 50}}
                        data={props.data}
                        barGap={9}
                    >
                        <CartesianGrid vertical={false} strokeDasharray='2.5 3' />
                        <Tooltip content={<CustomActivityTooltip />} />
                        <XAxis dataKey='number' axisLine={true} tickLine={false} stroke='#9B9EAC' tick={{ fill: '#9B9EAC' }} dy={10} />
                        <YAxis
                            yAxisId='kg'
                            datakey='kilogram'
                            orientation='right'
                            domain={["dataMin - 1", "dataMax + 2"]}
                            tickCount={3}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9B9EAC' }}
                            dx={30}
                        />
                        <YAxis
                            yAxisId='kCal'
                            datakey='calories'
                            domain={[0, "dataMax + 50"]}
                            hide={true}
                        />
                        <Bar
                            name="Poids (kg)"
                            yAxisId='kg'
                            dataKey='kilogram'
                            fill='#282D30'
                            barSize={8}
                            radius={[50, 50, 0, 0]}
                        />
                        <Bar
                            name="Calories (kCal)"
                            yAxisId='kCal'
                            dataKey='calories'
                            fill='#E60000'
                            barSize={8}
                            radius={[50, 50, 0, 0]}
                        />
                    </BarChart>

            </div>
        );
}
export default ActivityChart;