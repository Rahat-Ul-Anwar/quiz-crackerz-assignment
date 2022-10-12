 
import { useLoaderData } from 'react-router-dom';
import { LineChart } from 'recharts';
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const charts = useLoaderData();
    console.log(charts.data)
 
    return (
        <div>
          
          <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={charts.data.total}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
        </div>
    );
};

export default Statistics;