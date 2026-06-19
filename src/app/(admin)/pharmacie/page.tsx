"use client";

import { Pill, Search, Clock, CheckCircle2, AlertTriangle, FileOutput } from 'lucide-react';
import clsx from 'clsx';

const mockOrdonnances = [
  { id: 'ORD-2026-1587', patient: 'HOUENANOU A. Kassi', medecin: 'Dr. Pascal HOUNKPÈ', date: '14 Juin 2026', statut: 'Servie' },
  { id: 'ORD-2026-1586', patient: 'ZOUNON M. Clarisse', medecin: 'Dr. Akouavi ZINSOU', date: '14 Juin 2026', statut: 'En attente' },
  { id: 'ORD-2026-1585', patient: 'AGBAYA P. Aristide', medecin: 'Dr. Arnaud ADJOVI', date: '13 Juin 2026', statut: 'Livrée' },
  { id: 'ORD-2026-1584', patient: 'DOSSOU Y. Samuel', medecin: 'Dr. Pascal HOUNKPÈ', date: '13 Juin 2026', statut: 'Partielle' },
];

export default function PharmaciePage() {
  return (
    <div className="flex flex-col gap-6">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Pharmacie & Ordonnances</h1>
          <p className="text-sm text-gray-500">Suivi des prescriptions et dispensation</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <p className="text-xs text-gray-500 font-medium">Ordonnances émises</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">3 245</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <p className="text-xs text-orange-500 font-medium">En attente</p>
          <p className="text-2xl font-bold text-orange-600 mt-1">280</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <p className="text-xs text-green-500 font-medium">Préparées</p>
          <p className="text-2xl font-bold text-green-600 mt-1">1 250</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <p className="text-xs text-blue-500 font-medium">Livrées</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">1 715</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Table Area */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col">
          <div className="p-4 border-b border-gray-100 flex gap-4">
            <button className="text-sm font-bold text-[#0FA958] border-b-2 border-[#0FA958] pb-2">Toutes</button>
            <button className="text-sm font-medium text-gray-500 hover:text-gray-800 pb-2">En attente</button>
            <button className="text-sm font-medium text-gray-500 hover:text-gray-800 pb-2">Préparées</button>
            <button className="text-sm font-medium text-gray-500 hover:text-gray-800 pb-2">Livrées</button>
          </div>
          
          <div className="overflow-x-auto flex-1 p-4">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-400 text-xs uppercase tracking-wider border-b border-gray-100">
                  <th className="pb-3 font-semibold">Ordonnance</th>
                  <th className="pb-3 font-semibold">Patient</th>
                  <th className="pb-3 font-semibold">Médecin</th>
                  <th className="pb-3 font-semibold">Date</th>
                  <th className="pb-3 font-semibold text-center">Statut</th>
                  <th className="pb-3 font-semibold text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {mockOrdonnances.map((o, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50">
                    <td className="py-3 font-mono text-xs font-bold text-gray-800 flex items-center gap-2">
                      <FileOutput size={14} className="text-[#0FA958]" />
                      {o.id}
                    </td>
                    <td className="py-3 text-gray-600 font-medium">{o.patient}</td>
                    <td className="py-3 text-gray-500 text-xs">{o.medecin}</td>
                    <td className="py-3 text-gray-500 text-xs">{o.date}</td>
                    <td className="py-3 text-center">
                       <span className={clsx(
                        "text-[10px] font-bold px-2 py-0.5 rounded",
                        o.statut === 'Servie' ? 'text-green-600 bg-green-50' :
                        o.statut === 'En attente' ? 'text-orange-600 bg-orange-50' :
                        o.statut === 'Livrée' ? 'text-blue-600 bg-blue-50' :
                        'text-purple-600 bg-purple-50'
                      )}>
                        {o.statut}
                      </span>
                    </td>
                    <td className="py-3 text-center">
                      <button className="text-gray-400 hover:text-[#0FA958]">
                        <Search size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Meds */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-sm font-bold text-gray-800 mb-6">Médicaments les plus prescrits</h2>
          
          <div className="space-y-4">
            {[
              { name: 'Paracétamol 1000mg', percent: 65, status: 'Stock stable', alert: false },
              { name: 'Amoxicilline 1g', percent: 42, status: 'Rupture imminente', alert: true },
              { name: 'Ibuprofène 400mg', percent: 38, status: 'Stock stable', alert: false },
              { name: 'Vitamine C 500mg', percent: 25, status: 'Stock bas', alert: true },
              { name: 'Spasfon', percent: 18, status: 'Stock stable', alert: false },
            ].map((med, idx) => (
              <div key={idx} className="flex flex-col gap-1.5">
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-2">
                    <Pill size={14} className={med.alert ? "text-red-500" : "text-[#0FA958]"} />
                    <span className="text-xs font-semibold text-gray-700">{med.name}</span>
                  </div>
                  <span className={clsx("text-[9px] font-bold", med.alert ? "text-red-500" : "text-gray-400")}>{med.status}</span>
                </div>
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div className={clsx("h-full rounded-full", med.alert ? "bg-red-500" : "bg-[#0FA958]")} style={{ width: `${med.percent}%` }}></div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
