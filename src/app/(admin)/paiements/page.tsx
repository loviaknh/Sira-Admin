"use client";

import { CreditCard, TrendingUp, Clock, Building2, Search, Filter, Download } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import clsx from 'clsx';

const activityData = [
  { name: '01 Juin', val: 4000000 },
  { name: '05 Juin', val: 3000000 },
  { name: '10 Juin', val: 5500000 },
  { name: '15 Juin', val: 4500000 },
  { name: '20 Juin', val: 6000000 },
  { name: '25 Juin', val: 8000000 },
];

const financialData = [
  { name: 'Remboursements', value: 68, color: '#0FA958' },
  { name: 'Frais de gestion', value: 22, color: '#3B82F6' },
  { name: 'Paiements directs', value: 10, color: '#F2A900' },
];

const mockTransactions = [
  { id: 'TRX-2026-9087', type: 'Cotisation annuelle', montant: '12 000 FCFA', methode: 'MTN MoMo', date: '21 Juin 2026', statut: 'Réussi' },
  { id: 'TRX-2026-9086', type: 'Remboursement', montant: '45 000 FCFA', methode: 'Virement', date: '21 Juin 2026', statut: 'Réussi' },
  { id: 'TRX-2026-9085', type: 'Paiement structure', montant: '125 500 FCFA', methode: 'Virement', date: '20 Juin 2026', statut: 'En attente' },
  { id: 'TRX-2026-9084', type: 'Cotisation mensuelle', montant: '1 000 FCFA', methode: 'Celtiis', date: '19 Juin 2026', statut: 'Échoué' },
];

export default function PaiementsPage() {
  return (
    <div className="flex flex-col gap-6">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Mutuelle & Paiements</h1>
          <p className="text-sm text-gray-500">Gestion financière, collectes et remboursements</p>
        </div>
        <button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-2">
          <Download size={16} />
          Exporter CSV
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <p className="text-xs text-gray-500 font-medium">Cotisations collectées</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">1.25 Milliards FCFA</p>
          <span className="text-xs text-green-500 font-bold flex items-center gap-1 mt-2"><TrendingUp size={12}/> +18.5%</span>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <p className="text-xs text-gray-500 font-medium">Remboursements</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">850 Millions FCFA</p>
          <span className="text-xs text-green-500 font-bold flex items-center gap-1 mt-2"><TrendingUp size={12}/> +8.2%</span>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <p className="text-xs text-gray-500 font-medium">En attente (Remboursement)</p>
          <p className="text-2xl font-bold text-orange-500 mt-1">45 Millions FCFA</p>
          <span className="text-xs text-gray-400 font-medium flex items-center gap-1 mt-2"><Clock size={12}/> 312 dossiers</span>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <p className="text-xs text-gray-500 font-medium">Structures payées</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">120 Millions FCFA</p>
          <span className="text-xs text-gray-400 font-medium flex items-center gap-1 mt-2"><Building2 size={12}/> 42 hôpitaux</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Evolution Chart */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-sm font-bold text-gray-800 mb-6">Évolution des collectes (FCFA)</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0FA958" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0FA958" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9CA3AF'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9CA3AF'}} tickFormatter={(val) => `${val / 1000000}M`} />
                <Tooltip />
                <Area type="monotone" dataKey="val" stroke="#0FA958" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Repartition Chart */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-sm font-bold text-gray-800 mb-6">Répartition des paiements</h2>
          <div className="flex items-center h-64 gap-8">
            <div className="h-full w-1/2 relative flex justify-center items-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={financialData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {financialData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-2xl font-black text-gray-800">1.25B</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 w-1/2">
              {financialData.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-xs font-semibold text-gray-700">{item.name}</span>
                  </div>
                  <span className="text-lg font-bold text-gray-800 pl-5">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Table Area */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
           <h2 className="text-sm font-bold text-gray-800">Dernières transactions</h2>
           <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                <input type="text" placeholder="Référence..." className="pl-8 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-xs outline-none" />
              </div>
              <button className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-600 rounded-md font-medium text-xs hover:bg-gray-100 flex items-center gap-2">
                <Filter size={14} /> Filtrer
              </button>
           </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-[11px] uppercase tracking-wider border-b border-gray-100">
                <th className="p-4 font-semibold">Référence</th>
                <th className="p-4 font-semibold">Type</th>
                <th className="p-4 font-semibold">Montant</th>
                <th className="p-4 font-semibold">Méthode</th>
                <th className="p-4 font-semibold">Date</th>
                <th className="p-4 font-semibold text-right">Statut</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {mockTransactions.map((trx, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 cursor-pointer">
                  <td className="p-4 font-mono text-xs text-gray-600">{trx.id}</td>
                  <td className="p-4 font-medium text-gray-800">{trx.type}</td>
                  <td className="p-4 font-bold text-gray-800">{trx.montant}</td>
                  <td className="p-4 text-gray-500 text-xs">{trx.methode}</td>
                  <td className="p-4 text-gray-500 text-xs">{trx.date}</td>
                  <td className="p-4 text-right">
                    <span className={clsx(
                      "text-[10px] font-bold px-2 py-0.5 rounded ml-auto w-fit",
                      trx.statut === 'Réussi' ? 'bg-green-100 text-green-700' :
                      trx.statut === 'En attente' ? 'bg-orange-100 text-orange-700' :
                      'bg-red-100 text-red-700'
                    )}>{trx.statut}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
