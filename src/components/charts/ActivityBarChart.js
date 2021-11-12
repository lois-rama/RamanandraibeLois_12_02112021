import { React, useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import {getUserActivity} from '../../service/ApiClient.js'
import '../../styles/components/ActivityBarChart.css'

function ActivityChart(props) {
    const [data, setData] = useState([])

    const getActivityData = async () => {
        const request = await getUserActivity(props.id);

        for ( let i = 0, length = request.sessions.length; i < length; i++) {
            request.sessions[i] = {
                ...request.sessions[i],
                day: i + 1,
            };
        }
        setData(request.sessions)
    }
    useEffect(() => {
        getActivityData();}, []);

        return (
            <div className="activityContainer">
                <div className="chartHeader">
                    <h2>Activité quotidienne</h2>
                </div>
                    <BarChart width={835} height={320}
                        margin={{
                            top: 50,
                        }}
                        data={data}
                        barGap={9}
                    >
                        <CartesianGrid vertical={false} strokeDasharray='2 2' />
                        <Tooltip />
                        <XAxis dataKey='day' axisLine={false} tickLine={false} />
                        <YAxis
                            yAxisId='kg'
                            datakey='kilogram'
                            orientation='right'
                            domain={["dataMin - 1", "dataMax"]}
                            tickCount={3}
                            axisLine={false}
                            tickLine={false}
                        />
                        <YAxis
                            yAxisId='kCal'
                            datakey='calories'
                            hide={true}
                        />
                        <Bar
                            yAxisId='kg'
                            dataKey='kilogram'
                            fill='#282D30'
                            barSize={8}
                        />
                        <Bar
                            yAxisId='kCal'
                            dataKey='calories'
                            fill='#E60000'
                            barSize={8}
                        />
                    </BarChart>

            </div>
        );
}
export default ActivityChart;