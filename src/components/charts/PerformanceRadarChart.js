import { React, useState, useEffect } from 'react';
import { RadarChart,PolarGrid,Radar,PolarAngleAxis} from 'recharts';
import {getUserPerformance} from '../../service/ApiClient.js'
import '../../styles/components/PerformanceRadarChart.css'

function PerformanceChart(props) {
    const [data, setData] = useState([])

    const getPerformanceData = async () => {
        const request = await getUserPerformance(props.id);
        console.log(request)

        const newData = request.data.map((data) => {
            switch (data.kind) {
                case 1:
                    return { ...data, kind: 'Cardio' };
                case 2:
                    return { ...data, kind: 'Energie' };
                case 3:
                    return { ...data, kind: 'Endurance' };
                case 4:
                    return { ...data, kind: 'Force' };
                case 5:
                    return { ...data, kind: 'Vitesse' };
                case 6:
                    return { ...data, kind: 'Intensité' };
                default:
                    return { ...data};
            }
        });
        setData(newData);
    };
    console.log(data)
    useEffect(() => {
        getPerformanceData();}, []);

        if(data.length === 0) return null

    return (
        <div className ="radarChart">
                <RadarChart width={258} height={263} outerRadius='60%' data={data}>
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