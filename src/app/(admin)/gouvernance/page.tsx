"use client";

import { Shield, Award, AlertTriangle, Building, ArrowUpRight, TrendingUp } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const radarData = [
  { subject: 'Hygiène', A: 120, B: 110, fullMark: 150 },
  { subject: 'Accueil', A: 98, B: 130, fullMark: 150 },
  { subject: 'Équipement', A: 86, B: 130, fullMark: 150 },
  { subject: 'Temps Attente', A: 99, B: 100, fullMark: 150 },
  { subject: 'Compétence', A: 85, B: 90, fullMark: 150 },
  { subject: 'Sécurité', A: 65, B: 85, fullMark: 150 },
];

const barData = [
  { name: 'CHU-MEL', satisfaction: 85, conformite: 92 },
  { name: 'Hôpital Militaire', satisfaction: 94, conformite: 98 },
  { name: 'CHD Ouémé', satisfaction: 72, conformite: 80 },
  { name: 'CHD Borgou', satisfaction: 78, conformite: 85 },
];

export default function GouvernancePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Gouvernance & Qualité</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Évaluation des structures de santé et conformité</p>
        </div>
        <button className="bg-[#0FA958] hover:bg-[#0B8A47] text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-2">
          <Shield size={16} />
          Lancer un audit Qualité
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-[#0F5B46] to-[#0FA958] rounded-2xl p-6 shadow-sm text-white">
          <Award size={32} className="text-green-200 mb-4" />
          <p className="text-green-100 text-sm font-medium mb-1">Score National Qualité</p>
          <p className="text-4xl font-black">84.2 <span className="text-lg font-medium text-green-200">/ 100</span></p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-500">
              <Building size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Hôpitaux certifiés A+</p>
              <p className="text-xl font-bold text-gray-800 dark:text-gray-100">12 structures</p>
            </div>
          </div>
          <div className="text-xs font-semibold text-blue-500 flex items-center gap-1 mt-2">
            <TrendingUp size={14} /> +3 cette année
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm flex flex-col justify-center border-l-4 border-l-orange-500">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-orange-500">
              <AlertTriangle size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Mises en demeure</p>
              <p className="text-xl font-bold text-gray-800 dark:text-gray-100">2 cliniques</p>
            </div>
          </div>
          <div className="text-xs font-semibold text-gray-500 mt-2">
            Non-conformité des équipements
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Radar Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
          <h2 className="text-sm font-bold text-gray-800 dark:text-gray-100 mb-6">Profil Qualité : CHU-MEL vs HIA</h2>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#6B7280', fontSize: 12, fontWeight: 600 }} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                <Radar name="CHU-MEL" dataKey="A" stroke="#0FA958" fill="#0FA958" fillOpacity={0.4} />
                <Radar name="Hôpital Militaire" dataKey="B" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.4} />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
          <h2 className="text-sm font-bold text-gray-800 dark:text-gray-100 mb-6">Performances par structure</h2>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={barData}
                margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                <XAxis type="number" domain={[0, 100]} hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#4B5563', fontSize: 12, fontWeight: 500}} width={120} />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
                <Bar dataKey="satisfaction" name="Satisfaction (%)" fill="#0FA958" radius={[0, 4, 4, 0]} barSize={12} />
                <Bar dataKey="conformite" name="Conformité (%)" fill="#3B82F6" radius={[0, 4, 4, 0]} barSize={12} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}
