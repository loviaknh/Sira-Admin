"use client";

import { StatsCard } from "@/components/admin/StatsCard";
import { Users, Activity, PhoneCall, Building2, Droplet, ShieldCheck } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', citoyens: 4000, teleconsultations: 2400 },
  { name: 'Fév', citoyens: 3000, teleconsultations: 1398 },
  { name: 'Mar', citoyens: 2000, teleconsultations: 9800 },
  { name: 'Avr', citoyens: 2780, teleconsultations: 3908 },
  { name: 'Mai', citoyens: 1890, teleconsultations: 4800 },
  { name: 'Juin', citoyens: 2390, teleconsultations: 3800 },
  { name: 'Juil', citoyens: 3490, teleconsultations: 4300 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Vue Globale Nationale</h1>
        <p className="text-slate-500 mt-2">Pilotage en temps réel de l'écosystème de santé Sira.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Citoyens Enregistrés" value="1,245,039" icon={Users} trend="12.5%" trendUp={true} color="text-blue-600" />
        <StatsCard title="Téléconsultations" value="84,230" icon={Activity} trend="8.2%" trendUp={true} color="text-indigo-600" />
        <StatsCard title="Alertes SOS (Jour)" value="142" icon={PhoneCall} trend="2.1%" trendUp={false} color="text-rose-600" />
        <StatsCard title="Établissements" value="348" icon={Building2} trend="4.5%" trendUp={true} color="text-emerald-600" />
        <StatsCard title="Dons de Sang" value="12,050" icon={Droplet} trend="18.0%" trendUp={true} color="text-red-600" />
        <StatsCard title="Mutuelles Actives" value="450,290" icon={ShieldCheck} trend="5.4%" trendUp={true} color="text-amber-600" />
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-6">Adoption & Usage de la plateforme</h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorCitoyens" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorTele" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#cbd5e1" />
              <YAxis stroke="#cbd5e1" />
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Area type="monotone" dataKey="citoyens" stroke="#2563eb" fillOpacity={1} fill="url(#colorCitoyens)" name="Nouveaux Citoyens" />
              <Area type="monotone" dataKey="teleconsultations" stroke="#4f46e5" fillOpacity={1} fill="url(#colorTele)" name="Téléconsultations" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
