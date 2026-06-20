"use client";

import dynamic from 'next/dynamic';
import { StatusBadge } from '@/components/admin/StatusBadge';
import { AlertTriangle, Clock, PhoneCall, Navigation } from 'lucide-react';

const DynamicMap = dynamic(() => import('@/components/admin/MapComponent'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-slate-100 animate-pulse rounded-2xl flex items-center justify-center text-slate-400">Chargement de la carte tactique...</div>
});

const alerts = [
  { id: "SOS-882", patient: "Dossou Kossi", type: "Malaise", time: "Il y a 2 min", status: "En cours", location: "Haie Vive, Cotonou", severity: "high" },
  { id: "SOS-881", patient: "Inconnu", type: "Accident Voie Publique", time: "Il y a 14 min", status: "Ambulance affectée", location: "Stade de l'Amitié", severity: "critical" },
  { id: "SOS-880", patient: "Ahouefa Sena", type: "Accouchement", time: "Il y a 45 min", status: "Terminé", location: "Akpakpa", severity: "medium" },
];

export default function SosSantePage() {
  return (
    <div className="flex flex-col h-[calc(100vh-80px)] gap-6">
      <div>
        <h1 className="text-3xl font-bold text-rose-600 flex items-center gap-3">
          <AlertTriangle size={32} />
          Centre d'Alerte SOS Santé
        </h1>
        <p className="text-slate-500 mt-2">Tour de contrôle nationale des urgences médicales.</p>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-hidden">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col overflow-hidden">
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
            <h2 className="font-bold text-slate-800">Alertes Actives</h2>
            <span className="px-2 py-1 bg-rose-100 text-rose-700 rounded-full text-xs font-bold animate-pulse">2 CRITIQUES</span>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {alerts.map((alert) => (
              <div key={alert.id} className={`p-4 rounded-xl border ${alert.severity === 'critical' ? 'border-rose-200 bg-rose-50' : 'border-slate-100 bg-white hover:bg-slate-50'} transition-colors cursor-pointer`}>
                <div className="flex justify-between items-start mb-2">
                  <span className="font-mono text-xs font-bold text-slate-500">{alert.id}</span>
                  <StatusBadge status={alert.status} />
                </div>
                <h3 className="font-bold text-slate-800 text-lg">{alert.type}</h3>
                <p className="text-slate-600 text-sm mb-3">Patient : {alert.patient}</p>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <div className="flex items-center gap-1"><Clock size={14} /> {alert.time}</div>
                  <div className="flex items-center gap-1"><Navigation size={14} /> {alert.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 z-0">
          <DynamicMap />
          
          <div className="absolute top-4 left-4 z-[400] flex gap-2">
            <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg border border-slate-200 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500 animate-ping"></div>
              <span className="font-semibold text-slate-700 text-sm">Mode Surveillance Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
