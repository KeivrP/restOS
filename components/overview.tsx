'use client';

import { Line, LineChart, ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from 'recharts';

const lineData = [
  { name: 'Mon', sales: 2400 },
  { name: 'Tue', sales: 1398 },
  { name: 'Wed', sales: 9800 },
  { name: 'Thu', sales: 3908 },
  { name: 'Fri', sales: 4800 },
  { name: 'Sat', sales: 3800 },
  { name: 'Sun', sales: 4300 },
];

const pieData = [
  { name: 'Main Dishes', value: 400 },
  { name: 'Beverages', value: 300 },
  { name: 'Desserts', value: 200 },
  { name: 'Appetizers', value: 100 },
];

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))'];

export function Overview() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="h-[350px]">
        <h3 className="text-lg font-semibold mb-4">Weekly Sales</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lineData}>
            <Line
              type="monotone"
              dataKey="sales"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={false}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-background border rounded-lg shadow-lg p-2">
                      <p className="text-sm font-medium">${payload[0].value}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="h-[350px]">
        <h3 className="text-lg font-semibold mb-4">Sales by Category</h3>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-background border rounded-lg shadow-lg p-2">
                      <p className="text-sm font-medium">{payload[0].name}</p>
                      <p className="text-sm">${payload[0].value}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}