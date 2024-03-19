import { LineChart as Lchart, Line,XAxis,YAxis,Tooltip   } from 'recharts';
import { BarChart, Bar, Cell,   CartesianGrid,  Legend, ResponsiveContainer } from 'recharts';


const LineChart = () => {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    const marks=[
        {"id":1,"name":"Alice","Mathematics":85,"English":78},
        {"id":2,"name":"Bob","Mathematics":75,"English":80},
        {"id":3,"name":"Charlie","Mathematics":90,"English":85},
        {"id":4,"name":"David","Mathematics":88,"English":82},
        {"id":5,"name":"Emma","Mathematics":92,"English":88},
        {"id":6,"name":"Frank","Mathematics":78,"English":75},
        {"id":7,"name":"Grace","Mathematics":85,"English":90},
        {"id":8,"name":"Henry","Mathematics":80,"English":84},
        {"id":9,"name":"Ivy","Mathematics":86,"English":87},
        {"id":10,"name":"Jack","Mathematics":89,"English":100}
      ]
      

      
    return (
        <div>
          <div className='w-full'>
          <Lchart md:width={500} width={300} md:height={400} height={300} data={marks}>
           <Line type="monotone" dataKey="Mathematics" stroke="cyan" />
           <Line type="monotone" dataKey="English" stroke="green" />
           <XAxis dataKey="name" />
           <YAxis />
           <Tooltip />
           </Lchart>
          </div>
          <div>
          <BarChart width={300} height={300} data={data}>
          <Bar dataKey="uv" fill="green" />
          <XAxis dataKey="name" />
           <YAxis />
           <Tooltip />
        </BarChart>
          </div>
        </div>
    );
};

export default LineChart;