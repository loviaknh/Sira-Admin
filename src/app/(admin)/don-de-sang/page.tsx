"use client";

import { Droplet, TrendingDown, ArrowUpRight, Search, Plus, Filter, Heart, Activity } from 'lucide-react';
import clsx from 'clsx';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceLine } from 'recharts';

const stockData = [
  { group: 'O+', stock: 450, min: 200 },
  { group: 'O-', stock: 80, min: 100 }, // Alerte
  { group: 'A+', stock: 320, min: 150 },
  { group: 'A-', stock: 45, min: 50 },  // Alerte
  { group: 'B+', stock: 210, min: 100 },
  { group: 'B-', stock: 30, min: 40 },  // Alerte
  { group: 'AB+', stock: 120, min: 50 },
  { group: 'AB-', stock: 15, min: 20 }, // Alerte
];

const mockDonations = [
  { id: 'DON-2026-901', donor: 'Moussa DIALLO', group: 'O+', hospital: 'CHU-MEL', date: 'Aujourd\'hui', volume: '450 ml', status: 'Testé OK' },
  { id: 'DON-2026-902', donor: 'Amina SANI', group: 'A-', hospital: 'Hôpital Militaire', date: 'Aujourd\'hui', volume: '450 ml', status: 'En test' },
  { id: 'DON-2026-903', donor: 'Jean KODJO', group: 'B+', hospital: 'CNTS Cotonou', date: 'Hier', volume: '450 ml', status: 'Rejeté' },
  { id: 'DON-2026-904', donor: 'Fatouma BIO', group: 'O-', hospital: 'CNTS Parakou', date: 'Hier', volume: '450 ml', status: 'Testé OK' },
];

export default function DonDeSangPage() {
  return (
    <div className="flex flex-col gap-6">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Banque de Sang Nationale</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Supervision des stocks et campagnes de don de sang</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-2 border border-red-200">
            <Activity size={16} />
            Lancer un appel d'urgence
          </button>
          <button className="bg-[#0FA958] hover:bg-[#0B8A47] text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-2">
            <Plus size={16} />
            Enregistrer un don
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-5 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600">
            <Droplet size={24} className="fill-red-600" />
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Stock Total (Poches)</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">1 270</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-5 shadow-sm flex items-center gap-4 border-l-4 border-l-red-500">
          <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600">
            <Activity size={24} />
          </div>
          <div>
            <p className="text-xs text-red-500 font-bold">Groupes en Alerte</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">O-, A-, B-, AB-</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-5 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-[#0FA958]">
            <Heart size={24} className="fill-[#0FA958]" />
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Donneurs inscrits</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">15 420</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-5 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
            <TrendingDown size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Demandes en attente</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">34</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Chart Area */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
          <h2 className="text-sm font-bold text-gray-800 dark:text-gray-100 mb-6">Niveau des stocks par groupe sanguin</h2>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stockData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="group" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#6B7280', fontWeight: 'bold'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#9CA3AF'}} />
                <Tooltip 
                  cursor={{fill: 'transparent'}} 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar 
                  dataKey="stock" 
                  radius={[4, 4, 0, 0]} 
                  maxBarSize={40}
                >
                  {stockData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.stock < entry.min ? '#EF4444' : '#0FA958'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
              <div className="w-3 h-3 rounded bg-[#0FA958]"></div> Stock suffisant
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
              <div className="w-3 h-3 rounded bg-red-500"></div> Stock critique (&lt; seuil min)
            </div>
          </div>
        </div>

        {/* Table Area */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col">
          <div className="p-5 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
            <h2 className="text-sm font-bold text-gray-800 dark:text-gray-100">Derniers prélèvements</h2>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                <input type="text" placeholder="ID Poche..." className="pl-8 pr-3 py-1.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-xs outline-none dark:text-gray-200" />
              </div>
              <button className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 rounded-md font-medium text-xs hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2">
                <Filter size={14} />
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/80 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 text-[11px] uppercase tracking-wider border-b border-gray-100 dark:border-gray-700">
                  <th className="p-4 font-semibold">ID Poche</th>
                  <th className="p-4 font-semibold">Groupe</th>
                  <th className="p-4 font-semibold">Donneur</th>
                  <th className="p-4 font-semibold">Centre</th>
                  <th className="p-4 font-semibold">Statut</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {mockDonations.map((d, i) => (
                  <tr key={i} className="border-b border-gray-50 dark:border-gray-700 hover:bg-gray-50/50 dark:hover:bg-gray-700/50">
                    <td className="p-4 font-mono text-xs font-bold text-gray-600 dark:text-gray-300">{d.id}</td>
                    <td className="p-4">
                      <span className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 font-black text-xs flex items-center justify-center">
                        {d.group}
                      </span>
                    </td>
                    <td className="p-4 font-medium text-gray-800 dark:text-gray-200">{d.donor}</td>
                    <td className="p-4 text-gray-500 dark:text-gray-400 text-xs">
                      {d.hospital}<br/>
                      <span className="text-[10px] text-gray-400">{d.date}</span>
                    </td>
                    <td className="p-4">
                      <span className={clsx(
                        "text-[10px] font-bold px-2 py-0.5 rounded",
                        d.status === 'Testé OK' ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                        d.status === 'En test' ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" :
                        "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
                      )}>{d.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
