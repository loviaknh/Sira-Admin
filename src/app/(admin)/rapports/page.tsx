"use client";

import { FileText, Download, Filter, Calendar, FileSpreadsheet, Activity, ChevronRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const mockReports = [
  { id: 'RPT-06-2026', title: 'Rapport Mensuel d\'Activité', type: 'PDF', date: '01 Juin 2026', size: '2.4 MB' },
  { id: 'RPT-FIN-05', title: 'Bilan Financier Mai 2026', type: 'Excel', date: '01 Juin 2026', size: '1.1 MB' },
  { id: 'RPT-EPI-05', title: 'Surveillance Épidémiologique', type: 'PDF', date: '28 Mai 2026', size: '4.5 MB' },
  { id: 'RPT-PHARM-Q2', title: 'État des stocks (Pharmacies)', type: 'CSV', date: '25 Mai 2026', size: '840 KB' },
];

const activityData = [
  { name: 'Jan', consultations: 4000, urgences: 2400 },
  { name: 'Fév', consultations: 3000, urgences: 1398 },
  { name: 'Mar', consultations: 2000, urgences: 9800 },
  { name: 'Avr', consultations: 2780, urgences: 3908 },
  { name: 'Mai', consultations: 1890, urgences: 4800 },
  { name: 'Juin', consultations: 2390, urgences: 3800 },
];

export default function RapportsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Rapports & Analyses</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Génération de documents officiels et statistiques</p>
        </div>
        <button className="bg-[#0FA958] hover:bg-[#0B8A47] text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-2">
          <FileText size={16} />
          Nouveau Rapport
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Generateur de rapport */}
        <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm flex flex-col gap-5">
          <h2 className="text-sm font-bold text-gray-800 dark:text-gray-100">Générateur Rapide</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">Type de rapport</label>
              <select className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm outline-none dark:text-gray-200">
                <option>Activité Hospitalière</option>
                <option>Bilan Financier</option>
                <option>Épidémiologie</option>
              </select>
            </div>
            
            <div>
              <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">Période</label>
              <div className="flex items-center gap-2">
                <input type="date" className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm outline-none text-gray-500 dark:text-gray-400" />
                <span className="text-gray-400">à</span>
                <input type="date" className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm outline-none text-gray-500 dark:text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">Format d'export</label>
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-[#0FA958]/10 text-[#0FA958] border border-[#0FA958]/20 rounded-lg text-sm font-bold flex items-center justify-center gap-2">
                  <FileText size={16} /> PDF
                </button>
                <button className="flex-1 py-2 bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors">
                  <FileSpreadsheet size={16} /> Excel
                </button>
              </div>
            </div>
            
            <button className="w-full bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white py-2.5 rounded-lg text-sm font-bold transition-colors mt-2">
              Générer et Télécharger
            </button>
          </div>
        </div>

        {/* Historique et stats */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
            <h2 className="text-sm font-bold text-gray-800 dark:text-gray-100 mb-6">Aperçu : Consultations vs Urgences (S1 2026)</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={activityData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorConsultations" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0FA958" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#0FA958" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorUrgences" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9CA3AF'}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9CA3AF'}} />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Area type="monotone" dataKey="consultations" stroke="#0FA958" strokeWidth={2} fillOpacity={1} fill="url(#colorConsultations)" />
                  <Area type="monotone" dataKey="urgences" stroke="#EF4444" strokeWidth={2} fillOpacity={1} fill="url(#colorUrgences)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#0FA958]"></div> Consultations</span>
              <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-500"></div> Urgences (SOS)</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col">
            <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-sm font-bold text-gray-800 dark:text-gray-100">Derniers rapports générés</h2>
              <button className="text-sm text-[#0FA958] font-semibold hover:underline">Voir tout</button>
            </div>
            <div className="p-2">
              {mockReports.map((r, i) => (
                <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className={clsx(
                      "w-10 h-10 rounded-lg flex items-center justify-center",
                      r.type === 'PDF' ? "bg-red-50 text-red-500 dark:bg-red-900/30" : 
                      r.type === 'Excel' ? "bg-green-50 text-green-500 dark:bg-green-900/30" : 
                      "bg-blue-50 text-blue-500 dark:bg-blue-900/30"
                    )}>
                      {r.type === 'PDF' ? <FileText size={20}/> : <FileSpreadsheet size={20}/>}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 dark:text-gray-200 text-sm group-hover:text-[#0FA958] transition-colors">{r.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        <span>{r.date}</span>
                        <span>•</span>
                        <span>{r.size}</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:border-gray-300 transition-colors">
                    <Download size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
