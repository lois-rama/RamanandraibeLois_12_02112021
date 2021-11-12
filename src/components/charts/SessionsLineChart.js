import { React, useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip} from 'recharts';
import {getUserSessions} from '../../service/ApiClient.js'


function SessionsChart(props) {
    const [data, setData] = useState([])

    const CustomToolTip = ({ active, payload}) => {
        if (active && payload && payload.length) {
            return (
                <div class="tooltip">
                    <p class="tooltipText">{`${payload[0].value} min`}</p>
                </div>
        )
    }
    return null;
}

    console.log(data)

    const getSessionsData = async () => {
        const request = await getUserSessions(props.id);

        const newData = request.sessions.map((session) => {
            switch (session.day) {
                case 1:
                    return { ...session, day: 'L' };
                case 2:
                    return { ...session, day: 'M' };
                case 3:
                    return { ...session, day: 'M' };
                case 4:
                    return { ...session, day: 'J' };
                case 5:
                    return { ...session, day: 'V' };
                case 6:
                    return { ...session, day: 'S' };
                case 7:
                    return { ...session, day: 'D' };

                default:
                    return { ...session};
            }
            
        });
        const index0 = {
            day: "",
            sessionLength: 0
        };
        const index8 = {
            day: "",
            sessionLength: 100
        }
        newData.unshift(index0);
        newData.push(index8)

        setData(newData);
    };

    

    useEffect(() => { getSessionsData() }, []);
    if(data.length === 0) return null

    return (
        <div className="lineChart">
            <h2 className="sessionsTitle">Durée moyenne des sessions</h2>
            <LineChart width={268} height={253} data={data}>
                <XAxis dataKey="day" 
                    axisLine={false}
                    tickLine={false}
                    tick={{
                        fill : 'rgba(255, 255, 255, 0.7)',
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
                    cursor={{
                        stroke: 'rgba(0, 0, 0, 0.1)',
                        strokeWidth: 60,
                    }}
                />
                <Line 
                    dataKey="sessionLength" 
                    type="monotone"
                    stroke="rgba(255, 255, 255, 0.8)"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{
                        stroke: "rgba(255,255,255, 0.4)",
                        strokeWidth: 10,
                        r: 4,
                    }}
            />
            </LineChart>
        </div>
    );
}


export default SessionsChart;