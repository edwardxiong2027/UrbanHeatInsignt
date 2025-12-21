
import React, { useState } from 'react';
import { CITIES } from './constants';
import PredictiveScatter from './components/PredictiveScatter';
import GlobalComparison from './components/GlobalComparison';
import RegressionMatrix from './components/RegressionMatrix';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState(CITIES[0]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-effect border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-orange-600 rounded-lg">
              <i className="fa-solid fa-temperature-arrow-up text-white"></i>
            </div>
            <span className="font-extrabold text-xl tracking-tighter uppercase">UrbanHeat<span className="text-orange-500">Insight</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#dashboard" className="hover:text-white transition-colors">City Focus</a>
            <a href="#global" className="hover:text-white transition-colors">Global Sensitivity</a>
            <a href="#regression" className="hover:text-white transition-colors">Stats Matrix</a>
          </div>
          <button className="bg-white text-slate-950 px-4 py-2 rounded-full text-sm font-bold hover:bg-slate-200 transition-colors">
            AP Research 2026
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-orange-600/20 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <span className="px-4 py-1.5 bg-orange-600/10 text-orange-400 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-orange-600/20">
              Impervious Surface Area Research
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 tracking-tighter">
            THE TIERED RESPONSE OF <br/>
            <span className="text-transparent bg-clip-text heat-gradient">URBAN HEAT ISLANDS</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto font-medium">
            Does every new parking lot raise the temperature? Investigating the predictive link between ISA growth and heat intensity across 18 years of longitudinal data.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 space-y-32">
        
        {/* Interactive Dashboard - City Focus */}
        <section id="dashboard" className="space-y-12">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-6 border-b border-slate-800 pb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-12 h-[2px] bg-orange-500"></span>
                <h2 className="text-4xl font-black uppercase tracking-tighter">Deep Dive: <span className="text-orange-500">Predictive Signal</span></h2>
              </div>
              <p className="text-slate-500 text-lg">Analyzing the sensitivity of local climates to surface expansion.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {CITIES.map(city => (
                <button
                  key={city.id}
                  onClick={() => setSelectedCity(city)}
                  className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 border-2 ${
                    selectedCity.id === city.id 
                    ? 'bg-orange-600 border-orange-500 text-white shadow-xl shadow-orange-900/30 -translate-y-1' 
                    : 'bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700 hover:text-slate-300'
                  }`}
                >
                  {city.name.split(',')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-6">
              <PredictiveScatter city={selectedCity} />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800/50">
                  <span className="text-slate-500 text-[10px] font-black uppercase block mb-1 tracking-widest">ISA Mean</span>
                  <span className="text-3xl font-black text-white">{selectedCity.stats.meanISA.toFixed(1)}%</span>
                  <div className="text-[10px] text-slate-600 mt-1">SD: ±{selectedCity.stats.stdDevISA.toFixed(2)}</div>
                </div>
                <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800/50">
                  <span className="text-slate-500 text-[10px] font-black uppercase block mb-1 tracking-widest">UHI Mean</span>
                  <span className="text-3xl font-black text-orange-500">{selectedCity.stats.meanUHI.toFixed(1)}°C</span>
                  <div className="text-[10px] text-slate-600 mt-1">SD: ±{selectedCity.stats.stdDevUHI.toFixed(2)}</div>
                </div>
                <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800/50">
                  <span className="text-slate-500 text-[10px] font-black uppercase block mb-1 tracking-widest">Pearson r</span>
                  <span className="text-3xl font-black text-blue-400">{selectedCity.regression.rValue.toFixed(3)}</span>
                  <div className="text-[10px] text-slate-600 mt-1">Correlation Strength</div>
                </div>
                <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800/50">
                  <span className="text-slate-500 text-[10px] font-black uppercase block mb-1 tracking-widest">Climate Tier</span>
                  <span className="text-2xl font-black text-slate-300">Tier {selectedCity.tier}</span>
                  <div className="text-[10px] text-slate-600 mt-1 uppercase">{selectedCity.climate}</div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="glass-effect p-8 rounded-3xl h-full border border-slate-800">
                <div className="flex items-center gap-3 mb-6">
                  <i className="fa-solid fa-microscope text-orange-500 text-2xl"></i>
                  <h3 className="text-2xl font-black tracking-tighter">THE ANALYSIS</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 italic">
                  "{selectedCity.description}"
                </p>
                <div className="space-y-6">
                   <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800">
                      <h4 className="text-[10px] font-black text-slate-500 uppercase mb-2">Findings Context</h4>
                      <p className="text-xs text-slate-300">
                        The regression slope of <strong>{selectedCity.regression.slope.toFixed(3)}</strong> suggests that for every 1% increase in impervious cover, the heat island intensity changes by that magnitude.
                      </p>
                   </div>
                   <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800">
                      <h4 className="text-[10px] font-black text-slate-500 uppercase mb-2">Statistical Fit</h4>
                      <p className="text-xs text-slate-300">
                        With an R² of <strong>{selectedCity.regression.r2.toFixed(3)}</strong>, {selectedCity.tier === 1 ? 'ISA expansion is the primary driver of warming.' : 'other factors (wind, drought, or morphology) likely dominate the thermal trend.'}
                      </p>
                   </div>
                </div>
              </div>
              <AIAssistant />
            </div>
          </div>
        </section>

        {/* Global Comparison Section */}
        <section id="global">
          <GlobalComparison />
        </section>

        {/* Statistical Findings Matrix */}
        <section id="regression" className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
             <span className="text-orange-500 font-bold uppercase text-[10px] tracking-[0.3em] mb-4 block">Methodological Rigor</span>
            <h2 className="text-4xl font-black tracking-tighter mb-4">COMPLETE REGRESSION MATRIX</h2>
            <p className="text-slate-500 text-lg">
              Isolating the predictive power across six distinct U.S. climate regions.
            </p>
          </div>
          <RegressionMatrix />
        </section>

        {/* Research Implications */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div>
               <h2 className="text-4xl font-black tracking-tighter mb-6">PRACTICAL <br/> IMPLICATIONS</h2>
               <p className="text-slate-400 text-lg">Moving from descriptive research to urban adaptation strategy.</p>
            </div>
            <div className="space-y-6">
              <div className="flex gap-6 group">
                <div className="w-16 h-16 shrink-0 bg-orange-600/10 rounded-2xl border border-orange-600/20 flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                  <i className="fa-solid fa-ruler-combined text-orange-500 group-hover:text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 tracking-tight">Tailored Planning</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    In "Tier 1" cities like Houston, ISA reduction (reflective roofs, cool pavements) is the direct solution. In "Tier 3" cities like Phoenix, wind corridors and water-sensitive design are more critical.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="w-16 h-16 shrink-0 bg-blue-600/10 rounded-2xl border border-blue-600/20 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <i className="fa-solid fa-users text-blue-500 group-hover:text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 tracking-tight">Environmental Justice</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    In strong-predictive cities, vulnerable populations in low-tree-cover areas face nearly deterministic heat risks. Planning must prioritize equity-centered retrofits.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-orange-600/20 blur-[80px] rounded-full -z-10 animate-pulse"></div>
             <div className="glass-effect rounded-[40px] p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8">
                   <i className="fa-solid fa-quote-right text-6xl text-slate-800/50"></i>
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black italic tracking-tighter mb-8 text-slate-200">
                    "The takeaway isn’t only that cities heat differently, but that equity-centered planning has to start with how, and why, they do."
                  </h3>
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-[2px] bg-orange-500"></div>
                     <span className="font-bold uppercase tracking-widest text-xs text-orange-500">2026 Research Conclusion</span>
                  </div>
                </div>
             </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-40 border-t border-slate-900 py-20 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-black text-2xl uppercase tracking-tighter">UrbanHeat<span className="text-orange-500">Insight</span></span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              An AP Research initiative analyzing the longitudinal relationship between urban morphology and local climatology using NLCD and MODIS datasets.
            </p>
            <div className="flex gap-6">
               <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">NLCD 2019</span>
               <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">MODIS TERRA</span>
               <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">NASA EARTHDATA</span>
            </div>
          </div>
          <div>
            <h5 className="font-bold text-slate-300 mb-6 uppercase tracking-widest text-xs">Section Navigation</h5>
            <ul className="space-y-3 text-sm text-slate-500">
               <li><a href="#dashboard" className="hover:text-orange-500 transition-colors">City Metrics</a></li>
               <li><a href="#global" className="hover:text-orange-500 transition-colors">Sensitivity Hierarchy</a></li>
               <li><a href="#regression" className="hover:text-orange-500 transition-colors">Regression Data</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-slate-300 mb-6 uppercase tracking-widest text-xs">Project Metadata</h5>
            <ul className="space-y-3 text-sm text-slate-500">
               <li>Author: AP Research Student</li>
               <li>Date: 2026</li>
               <li>Word Count: 4581</li>
               <li>Cites: 24 References</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
