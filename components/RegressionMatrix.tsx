
import React from 'react';
import { CITIES } from '../constants';

const RegressionMatrix: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {CITIES.map((city) => (
        <div key={city.id} className="glass-effect p-6 rounded-2xl flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300">
          <div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">{city.name}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                city.regression.strength === 'Very strong' ? 'bg-green-500/20 text-green-400 border border-green-500/50' :
                city.regression.strength === 'Moderate' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50' :
                'bg-slate-500/20 text-slate-400 border border-slate-500/50'
              }`}>
                {city.regression.strength} Fit
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-6 line-clamp-3">
              {city.description}
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Regression Slope (β)</span>
              <span className="font-mono text-orange-400">{city.regression.slope.toFixed(3)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Explanatory Power (R²)</span>
              <span className="font-mono text-blue-400">{city.regression.r2.toFixed(3)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Significance (p)</span>
              <span className={`font-mono ${city.regression.pValue <= 0.05 ? 'text-green-400' : 'text-slate-400'}`}>
                {city.regression.pValue.toFixed(3)}
              </span>
            </div>
            
            {/* Progress bar visual for R-squared */}
            <div className="mt-4 pt-4 border-t border-slate-700">
               <div className="flex justify-between text-xs mb-1">
                 <span className="text-slate-500 uppercase tracking-wider">Predictive Confidence</span>
                 <span className="text-slate-300">{(city.regression.r2 * 100).toFixed(1)}%</span>
               </div>
               <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                 <div 
                   className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-1000"
                   style={{ width: `${city.regression.r2 * 100}%` }}
                 />
               </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RegressionMatrix;
