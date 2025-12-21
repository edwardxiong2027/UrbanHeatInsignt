
import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  ComposedChart, Scatter, Area 
} from 'recharts';
import { City } from '../types';

interface UHIChartProps {
  city: City;
}

const UHIChart: React.FC<UHIChartProps> = ({ city }) => {
  return (
    <div className="h-[400px] w-full mt-6 bg-slate-900/50 p-4 rounded-xl border border-slate-700">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <i className="fa-solid fa-chart-line text-orange-500"></i>
        ISA vs UHI Trend Analysis: {city.name}
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={city.data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
          <XAxis 
            dataKey="year" 
            stroke="#94a3b8" 
            fontSize={12} 
            tickMargin={10}
          />
          <YAxis 
            yAxisId="left"
            label={{ value: 'ISA (%)', angle: -90, position: 'insideLeft', offset: 10, fill: '#ef4444' }} 
            stroke="#ef4444"
            domain={['dataMin - 2', 'dataMax + 2']}
          />
          <YAxis 
            yAxisId="right" 
            orientation="right" 
            label={{ value: 'UHI Intensity (°C)', angle: 90, position: 'insideRight', offset: 10, fill: '#3b82f6' }}
            stroke="#3b82f6"
            domain={['dataMin - 0.5', 'dataMax + 0.5']}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
            itemStyle={{ color: '#f8fafc' }}
          />
          <Legend verticalAlign="top" height={36}/>
          <Area yAxisId="left" type="monotone" dataKey="isa" fill="#ef4444" stroke="#ef4444" fillOpacity={0.1} name="Impervious Surface %" />
          <Line yAxisId="right" type="monotone" dataKey="uhi" stroke="#3b82f6" strokeWidth={3} dot={{ r: 6 }} activeDot={{ r: 8 }} name="UHI Intensity (°C)" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UHIChart;
