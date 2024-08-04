import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';


interface Props {
    data: { x: unknown; y1: unknown; y2: unknown }[]; // กำหนด interface สำหรับ props
  }


  const Graph: React.FC<Props> = (props) => {
    const { data } = props; // รับค่า props
  return (

    <div className="Graph">
      <LineChart width={500} height={200} data={data}>
        <XAxis dataKey="x" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Line type="monotone" dataKey="y1" stroke="#007bff" label={{ position: 'top' }}/>
      </LineChart>
    </div>
    
  );
};

export default Graph;