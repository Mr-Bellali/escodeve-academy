"use client"

import Image from 'next/image';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Monday',
        present: 190,
        absent: 10,
    },
    {
        name: 'Tuesday',
        present: 200,
        absent: 0,
    },
    {
        name: 'Wednesday',
        present: 200,
        absent: 0,
    },
    {
        name: 'Thursday',
        present: 200,
        absent: 0,
    },
    {
        name: 'Friday',
        present: 192,
        absent: 8,
    }
];

const Attendance = () => {
    return (
        <div className="bg-white rounded-lg p-4 h-full ">
            <div className="flex justify-between items-center">
                <h1 className='text-lg font-semibold'>
                    Attendance
                </h1>
                <Image src="/moreDark.png" alt='' width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
                    <XAxis 
                        dataKey="name" 
                        axisLine={false} 
                        tick={{fill:"#d1d5db"}} 
                        tickLine={false}
                    />
                    <YAxis 
                        axisLine={false} 
                        tick={{fill:"#d1d5db"}} 
                        tickLine={false}
                    />
                    <Tooltip contentStyle={{borderRadius:"10px", borderColor:"#lightgray"}}/>
                    <Legend 
                        align='left' 
                        verticalAlign='top' 
                        wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} 
                    />
                    <Bar
                        dataKey="present"
                        fill="#C3EBFA"
                        legendType='circle'
                        radius={[10,10,0,0]}
                    />
                    <Bar
                        dataKey="absent"
                        fill="#FAE27C"
                        legendType='circle'
                        radius={[10,10,0,0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Attendance
