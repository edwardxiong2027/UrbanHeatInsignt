
import React from 'react';
import { 
  ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Line, ComposedChart, Cell
} from 'recharts';
import { City } from '../types';

interface PredictiveScatterProps {
  city: City;
}

const PredictiveScatter: React.FC<PredictiveScatterProps> = ({ city }) => {
  // Generate regression line points
  const minIsa = Math.min(...city.data.map(d => d.isa)) - 1;
  const maxIsa = Math.max(...city.data.map(d => d.isa)) + 1;
  
  const lineData = [
    { isa: minIsa, uhi: city.regression.slope * minIsa + city.regression.intercept },
    { isa: maxIsa, uhi: city.regression.slope * maxIsa + city.regression.intercept }
  ];

  const scatterData = city.data.map(d => ({
    isa: d.isa,
    uhi: d.uhi,
    year: d.year
  }));

  return (
    <div className="h-[450px] w-full mt-6 bg-slate-900/50 p-6 rounded-2xl border border-slate-700 shadow-inner">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-extrabold flex items-center gap-2">
            <i className="fa-solid fa-chart-scatter text-orange-500"></i>
            Regression Plot: {city.name}
          </h3>
          <p className="text-slate-500 text-xs">Visualizing ISA Expansion vs. UHI Response (2001-2019)</p>
        </div>
        <div className="text-right">
          <span className="text-slate-400 text-xs uppercase block font-bold tracking-widest">β Slope</span>
          <span className="text-2xl font-black text-orange-400">{city.regression.slope.toFixed(3)}</span>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height="80%">
        <ComposedChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis 
            type="number" 
            dataKey="isa" 
            name="Impervious Surface" 
            unit="%" 
            stroke="#64748b" 
            domain={[minIsa, maxIsa]}
            tick={{ fontSize: 12 }}
            label={{ value: 'Impervious Surface Area (%)', position: 'bottom', offset: 0, fill: '#94a3b8', fontSize: 12 }}
          />
          <YAxis 
            type="number" 
            dataKey="uhi" 
            name="UHI Intensity" 
            unit="°C" 
            stroke="#64748b"
            domain={['dataMin - 0.5', 'dataMax + 0.5']}
            tick={{ fontSize: 12 }}
            label={{ value: 'UHI Intensity (°C)', angle: -90, position: 'left', fill: '#94a3b8', fontSize: 12 }}
          />
          <ZAxis range={[100, 100]} />
          <Tooltip 
            cursor={{ strokeDasharray: '3 3' }}
            contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '12px' }}
          />
          
          <Scatter name="Observation Points" data={scatterData} fill="#f97316">
             {scatterData.map((entry, index) => (
               <Cell key={`cell-${index}`} fill={entry.year === 2019 ? '#f97316' : '#475569'} />
             ))}
          </Scatter>
          
          <Line 
            type="monotone" 
            data={lineData} 
            dataKey="uhi" 
            stroke="#f97316" 
            strokeWidth={2} 
            strokeDasharray="5 5"
            dot={false} 
            activeDot={false}
            name="Regression Trendline"
          />
        </ComposedChart>
      </ResponsiveContainer>
      
      <div className="mt-4 flex justify-center gap-6 text-[10px] uppercase tracking-widest font-bold text-slate-500">
         <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <span>2019 Data Point</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-600"></div>
            <span>Historical Points</span>
         </div>
         <div className="flex items-center gap-2 border-l border-slate-700 pl-6">
            <span className="text-slate-400">Pearson r:</span>
            <span className="text-orange-400">{city.regression.rValue.toFixed(3)}</span>
         </div>
      </div>
    </div>
  );
};

export default PredictiveScatter;
