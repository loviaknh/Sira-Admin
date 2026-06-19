"use client";

import { MessageSquare, Filter, Search, CheckCircle2, Clock, XCircle, AlertCircle } from 'lucide-react';
import clsx from 'clsx';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const mockPlaintes = [
  { id: 'PLT-2026-186', type: 'Délai d\'attente', structure: 'CHU-MEL', date: '21 Juin 2026', priority: 'Haute', statut: 'Nouvelle' },
  { id: 'PLT-2026-185', type: 'Mauvais accueil', structure: 'Clinique Mahouna', date: '21 Juin 2026', priority: 'Moyenne', statut: 'En cours' },
  { id: 'PLT-2026-184', type: 'Erreur facture', structure: 'Hôpital de Référence', date: '20 Juin 2026', priority: 'Moyenne', statut: 'En cours' },
  { id: 'PLT-2026-183', type: 'Comportement', structure: 'Hôpital de Zone', date: '19 Juin 2026', priority: 'Haute', statut: 'Résolue' },
  { id: 'PLT-2026-182', type: 'Propreté', structure: 'Pharmacie Centrale', date: '18 Juin 2026', priority: 'Basse', statut: 'Rejetée' },
];

const dataStatut = [
  { name: 'Nouvelles', value: 23, color: '#EF4444' },
  { name: 'En cours', value: 45, color: '#F59E0B' },
  { name: 'Résolues', value: 48, color: '#10B981' },
  { name: 'Rejetées', value: 7, color: '#6B7280' },
];

export default function PlaintesPage() {
  return (
    <div className="flex flex-col gap-6">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Plaintes & Suggestions</h1>
          <p className="text-sm text-gray-500">Suivi des requêtes des usagers</p>
        </div>
        <button className="bg-[#0FA958] hover:bg-[#0B8A47] text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors">
          Générer rapport
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500">
            <MessageSquare size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">Nouvelles</p>
            <p className="text-2xl font-bold text-gray-800">23</p>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">En cours</p>
            <p className="text-2xl font-bold text-gray-800">45</p>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-[#0FA958]">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">Résolues</p>
            <p className="text-2xl font-bold text-gray-800">420</p>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-500">
            <AlertCircle size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">Temps moyen</p>
            <p className="text-2xl font-bold text-gray-800">5.2j</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Table Area */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col">
          <div className="p-4 border-b border-gray-100 flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input type="text" placeholder="Chercher une plainte..." className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none" />
            </div>
            <select className="border border-gray-200 rounded-lg bg-gray-50 px-3 text-sm text-gray-600 outline-none">
              <option>Tous les statuts</option>
              <option>Nouvelles</option>
            </select>
          </div>
          
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                  <th className="p-4 font-semibold">ID</th>
                  <th className="p-4 font-semibold">Type</th>
                  <th className="p-4 font-semibold">Structure</th>
                  <th className="p-4 font-semibold">Date</th>
                  <th className="p-4 font-semibold">Priorité</th>
                  <th className="p-4 font-semibold">Statut</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {mockPlaintes.map((p, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 cursor-pointer">
                    <td className="p-4 font-mono text-xs text-gray-500">{p.id}</td>
                    <td className="p-4 font-medium text-gray-800">{p.type}</td>
                    <td className="p-4 text-gray-600">{p.structure}</td>
                    <td className="p-4 text-gray-600 text-xs">{p.date}</td>
                    <td className="p-4">
                      <span className={clsx(
                        "text-[10px] font-bold px-2 py-0.5 rounded",
                        p.priority === 'Haute' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                      )}>{p.priority}</span>
                    </td>
                    <td className="p-4">
                       <span className={clsx(
                        "text-[10px] font-bold px-2 py-1 rounded-full flex items-center w-fit gap-1",
                        p.statut === 'Nouvelle' ? 'bg-red-50 text-red-600 border border-red-200' :
                        p.statut === 'En cours' ? 'bg-orange-50 text-orange-600 border border-orange-200' :
                        p.statut === 'Résolue' ? 'bg-green-50 text-green-600 border border-green-200' :
                        'bg-gray-100 text-gray-600 border border-gray-200'
                      )}>
                        {p.statut}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Charts Area */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-sm font-bold text-gray-800 mb-6">Répartition par statut</h2>
          
          <div className="h-48 relative flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dataStatut}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {dataStatut.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl font-black text-gray-800">123</span>
              <span className="text-[10px] text-gray-500 font-medium">Total</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            {dataStatut.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-gray-600 font-medium">{item.name}</span>
                </div>
                <span className="font-bold text-gray-800">{item.value} <span className="text-xs text-gray-400 font-normal">({Math.round((item.value/123)*100)}%)</span></span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
