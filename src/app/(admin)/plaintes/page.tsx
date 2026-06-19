"use client";

import { MessageSquare, Clock, CheckCircle2, AlertCircle, Search, Filter, ChevronDown, MoreVertical, TrendingDown, ArrowUpRight } from 'lucide-react';
import clsx from 'clsx';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const mockPlaintes = [
  { id: 'PLT-2026-186', user: 'HOUENANOU A.', type: 'Délai d\'attente', structure: 'CHU-MEL', date: '21 Juin 2026', priority: 'Haute', statut: 'Nouvelle' },
  { id: 'PLT-2026-185', user: 'ZOUNON M.', type: 'Mauvais accueil', structure: 'Clinique Mahouna', date: '21 Juin 2026', priority: 'Moyenne', statut: 'En cours' },
  { id: 'PLT-2026-184', user: 'DOSSOU Y.', type: 'Erreur facture', structure: 'Hôpital de Référence', date: '20 Juin 2026', priority: 'Moyenne', statut: 'En cours' },
  { id: 'PLT-2026-183', user: 'AGBAYA P.', type: 'Comportement', structure: 'Hôpital de Zone', date: '19 Juin 2026', priority: 'Haute', statut: 'Résolue' },
  { id: 'PLT-2026-182', user: 'KPADONOU S.', type: 'Propreté', structure: 'Pharmacie Centrale', date: '18 Juin 2026', priority: 'Basse', statut: 'Rejetée' },
];

const dataStatut = [
  { name: 'Nouvelles', value: 23, color: '#EF4444' },
  { name: 'En cours', value: 45, color: '#F59E0B' },
  { name: 'Résolues', value: 48, color: '#10B981' },
];

const dataMois = [
  { name: 'Jan', plaintes: 65 },
  { name: 'Fév', plaintes: 59 },
  { name: 'Mar', plaintes: 80 },
  { name: 'Avr', plaintes: 81 },
  { name: 'Mai', plaintes: 56 },
  { name: 'Juin', plaintes: 45 },
];

export default function PlaintesPage() {
  return (
    <div className="flex flex-col gap-6">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Plaintes & Suggestions</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Suivi détaillé des réclamations usagers et qualité des services</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-2">
            <Filter size={16} />
            Filtrer par hôpital
          </button>
          <button className="bg-[#0FA958] hover:bg-[#0B8A47] text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-2">
            Générer rapport <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      {/* Premium Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-5 shadow-lg text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-10 transform translate-x-4 -translate-y-4">
            <MessageSquare size={100} />
          </div>
          <p className="text-red-100 font-medium text-sm mb-1">Plaintes Nouvelles</p>
          <p className="text-4xl font-black mb-2">23</p>
          <div className="flex items-center gap-1 text-red-200 text-xs font-semibold">
            <TrendingDown size={14} /> -12% vs semaine dernière
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-5 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">En cours de traitement</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">45</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-orange-500">
              <Clock size={20} />
            </div>
          </div>
          <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden mt-4">
            <div className="bg-orange-500 h-full rounded-full" style={{ width: '45%' }}></div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-5 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">Résolues (Ce mois)</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">128</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-[#0FA958]">
              <CheckCircle2 size={20} />
            </div>
          </div>
          <div className="mt-4 text-xs font-semibold text-[#0FA958] flex items-center gap-1">
            <ArrowUpRight size={14} /> Taux de résolution: 92%
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-5 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">Temps moyen résolution</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">3.4 j</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-500">
              <AlertCircle size={20} />
            </div>
          </div>
          <div className="mt-4 text-xs font-semibold text-blue-500 flex items-center gap-1">
            <TrendingDown size={14} /> -1.2j par rapport au mois pro
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Table Area */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col overflow-hidden">
          <div className="p-5 border-b border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">Liste des requêtes</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input type="text" placeholder="Chercher une plainte..." className="pl-9 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm outline-none w-64 dark:text-gray-200" />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/80 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 text-[11px] uppercase tracking-wider border-b border-gray-100 dark:border-gray-700">
                  <th className="p-4 font-semibold">ID & Patient</th>
                  <th className="p-4 font-semibold">Type de plainte</th>
                  <th className="p-4 font-semibold">Structure visée</th>
                  <th className="p-4 font-semibold">Date</th>
                  <th className="p-4 font-semibold text-center">Priorité</th>
                  <th className="p-4 font-semibold">Statut</th>
                  <th className="p-4 font-semibold text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {mockPlaintes.map((p, i) => (
                  <tr key={i} className="border-b border-gray-50 dark:border-gray-700 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="p-4">
                      <p className="font-mono text-xs font-bold text-gray-800 dark:text-gray-200">{p.id}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{p.user}</p>
                    </td>
                    <td className="p-4 font-medium text-gray-800 dark:text-gray-200">{p.type}</td>
                    <td className="p-4 text-gray-600 dark:text-gray-400 text-xs">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                        {p.structure}
                      </div>
                    </td>
                    <td className="p-4 text-gray-500 dark:text-gray-400 text-xs">{p.date}</td>
                    <td className="p-4 text-center">
                      <span className={clsx(
                        "text-[10px] font-bold px-2 py-0.5 rounded",
                        p.priority === 'Haute' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : 
                        p.priority === 'Moyenne' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' : 
                        'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
                      )}>{p.priority}</span>
                    </td>
                    <td className="p-4">
                       <span className={clsx(
                        "text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center w-fit gap-1",
                        p.statut === 'Nouvelle' ? 'bg-red-50 text-red-600 border border-red-200 dark:bg-red-900/20 dark:border-red-800/50 dark:text-red-400' :
                        p.statut === 'En cours' ? 'bg-orange-50 text-orange-600 border border-orange-200 dark:bg-orange-900/20 dark:border-orange-800/50 dark:text-orange-400' :
                        p.statut === 'Résolue' ? 'bg-green-50 text-[#0FA958] border border-green-200 dark:bg-green-900/20 dark:border-green-800/50 dark:text-green-400' :
                        'bg-gray-100 text-gray-600 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400'
                      )}>
                        {p.statut}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <button className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 p-1">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 text-center">
            <button className="text-sm font-semibold text-[#0FA958] hover:underline">Voir toutes les plaintes (128)</button>
          </div>
        </div>

        {/* Analytics Sidebar */}
        <div className="flex flex-col gap-6">
          
          {/* Pie Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-sm font-bold text-gray-800 dark:text-gray-100">Statut global</h2>
              <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"><MoreVertical size={16}/></button>
            </div>
            
            <div className="h-40 relative flex justify-center items-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dataStatut}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {dataStatut.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-2xl font-black text-gray-800 dark:text-gray-100">116</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              {dataStatut.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-gray-600 dark:text-gray-400 font-medium">{item.name}</span>
                  </div>
                  <span className="font-bold text-gray-800 dark:text-gray-100">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bar Chart (Trends) */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 flex-1">
            <h2 className="text-sm font-bold text-gray-800 dark:text-gray-100 mb-6">Volume mensuel</h2>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dataMois}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#9CA3AF'}} dy={10} />
                  <YAxis hide />
                  <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Bar dataKey="plaintes" fill="#0FA958" radius={[4, 4, 0, 0]} maxBarSize={30} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
