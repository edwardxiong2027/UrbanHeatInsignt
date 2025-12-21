
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Cell, LabelList
} from 'recharts';
import { CITIES } from '../constants';

const GlobalComparison: React.FC = () => {
  const sortedCities = [...CITIES].sort((a, b) => b.regression.slope - a.regression.slope);

  return (
    <div className="glass-effect p-8 rounded-3xl border border-slate-700 mt-12">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-black mb-2 uppercase tracking-tighter">The Hierarchy of Heat Sensitivity</h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Comparing the regression slope (β) for all cities. A higher slope indicates a city is more sensitive to ISA expansion.
        </p>
      </div>
      
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={sortedCities} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis 
              dataKey="name" 
              stroke="#64748b" 
              fontSize={12} 
              tickFormatter={(val) => val.split(',')[0]}
            />
            <YAxis stroke="#64748b" fontSize={12} />
            <Tooltip 
              cursor={{ fill: 'rgba(255,255,255,0.05)' }}
              contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '12px' }}
            />
            <Bar dataKey="regression.slope" radius={[6, 6, 0, 0]}>
              {sortedCities.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.tier === 1 ? '#ef4444' : entry.tier === 2 ? '#f97316' : '#334155'} 
                />
              ))}
              <LabelList dataKey="regression.slope" position="top" fill="#94a3b8" fontSize={11} formatter={(v: number) => v.toFixed(3)} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="p-4 bg-red-600/10 border border-red-600/30 rounded-xl">
           <span className="text-[10px] font-black uppercase text-red-500 block mb-1">Tier 1: Deterministic</span>
           <p className="text-xs text-slate-300">High slope + High R². Surface changes almost purely dictate heat patterns.</p>
        </div>
        <div className="p-4 bg-orange-600/10 border border-orange-600/30 rounded-xl">
           <span className="text-[10px] font-black uppercase text-orange-500 block mb-1">Tier 2: Moderate</span>
           <p className="text-xs text-slate-300">Strong sensitivity but moderated by seasonal or local morphological factors.</p>
        </div>
        <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-xl">
           <span className="text-[10px] font-black uppercase text-slate-400 block mb-1">Tier 3: Weak / Atmospheric</span>
           <p className="text-xs text-slate-500">Signal diluted by coastal breezes, topography, or high baseline density.</p>
        </div>
      </div>
    </div>
  );
};

export default GlobalComparison;
