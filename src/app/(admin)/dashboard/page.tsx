"use client";

import StatCard from '@/components/admin/StatCard';
import { Users, UserPlus, Building2, Stethoscope, AlertTriangle, Wallet } from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

// --- Mock Data ---
const activityData = [
  { name: 'Lun', consultations: 1200 },
  { name: 'Mar', consultations: 2100 },
  { name: 'Mer', consultations: 3245 },
  { name: 'Jeu', consultations: 2800 },
  { name: 'Ven', consultations: 2400 },
  { name: 'Sam', consultations: 1500 },
  { name: 'Dim', consultations: 900 },
];

const financialData = [
  { name: 'Cotisations', value: 850000000, color: '#0FA958' },
  { name: 'Remboursements', value: 280000000, color: '#3B82F6' },
  { name: 'Paiements structures', value: 90000000, color: '#F2A900' },
  { name: 'Frais de gestion', value: 30000000, color: '#8B5CF6' },
];

const diseaseData = [
  { name: 'Paludisme', value: 28 },
  { name: 'Infections rep.', value: 18 },
  { name: 'Hypertension', value: 12 },
  { name: 'Diabète', value: 9 },
  { name: 'Anémie', value: 7 },
  { name: 'Autres', value: 26 },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      
      {/* 6 Top Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-4">
        <StatCard 
          title="Patients enregistrés" 
          value="10 423" 
          trend="12.5" 
          isPositive={true}
          icon={Users} 
          iconBg="bg-green-100" 
          iconColor="text-[#0FA958]"
          chartData={[10, 25, 40, 30, 60, 50, 80]}
          chartColor="bg-[#0FA958]"
        />
        <StatCard 
          title="Professionnels de santé" 
          value="538" 
          trend="8.3" 
          isPositive={true}
          icon={UserPlus} 
          iconBg="bg-purple-100" 
          iconColor="text-purple-600"
          chartData={[5, 10, 15, 12, 20, 25, 30]}
          chartColor="bg-purple-400"
        />
        <StatCard 
          title="Structures de santé" 
          value="142" 
          trend="6.1" 
          isPositive={true}
          icon={Building2} 
          iconBg="bg-blue-100" 
          iconColor="text-blue-600"
          chartData={[10, 12, 11, 15, 18, 16, 20]}
          chartColor="bg-blue-400"
        />
        <StatCard 
          title="Consultations ce mois" 
          value="24 875" 
          trend="15.2" 
          isPositive={true}
          icon={Stethoscope} 
          iconBg="bg-yellow-100" 
          iconColor="text-[#F2A900]"
          chartData={[20, 40, 30, 60, 50, 70, 90]}
          chartColor="bg-[#F2A900]"
        />
        <StatCard 
          title="SOS Santé déclenchés" 
          value="312" 
          trend="21.3" 
          isPositive={false}
          icon={AlertTriangle} 
          iconBg="bg-red-100" 
          iconColor="text-red-500"
          chartData={[10, 15, 12, 25, 20, 35, 40]}
          chartColor="bg-red-400"
        />
        <StatCard 
          title="Montant collecté (FCFA)" 
          value="1.24B" 
          trend="18.7" 
          isPositive={true}
          icon={Wallet} 
          iconBg="bg-emerald-100" 
          iconColor="text-emerald-600"
          chartData={[50, 60, 55, 75, 70, 85, 100]}
          chartColor="bg-emerald-500"
        />
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Activity Chart */}
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-sm font-bold text-gray-800">Activité des consultations</h2>
            <select className="text-xs border-gray-200 rounded-lg text-gray-500 px-2 py-1 bg-gray-50">
              <option>Cette semaine</option>
              <option>Ce mois</option>
            </select>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorConsultations" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0FA958" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0FA958" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9CA3AF'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9CA3AF'}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  labelStyle={{ fontWeight: 'bold', color: '#111827' }}
                />
                <Area type="monotone" dataKey="consultations" stroke="#0FA958" strokeWidth={3} fillOpacity={1} fill="url(#colorConsultations)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Financial Flow */}
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-sm font-bold text-gray-800">Flux financiers (MTN MoMo)</h2>
          </div>
          <div className="h-48 relative flex justify-center items-center">
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
                <Tooltip formatter={(value: number) => new Intl.NumberFormat('fr-BJ', { style: 'currency', currency: 'XOF' }).format(value)} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-xl font-black text-gray-800">1.25B</span>
              <span className="text-[10px] text-gray-500 font-medium">FCFA</span>
            </div>
          </div>
          {/* Legend */}
          <div className="mt-4 flex flex-col gap-2">
            {financialData.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-gray-600">{item.name}</span>
                </div>
                <span className="font-semibold text-gray-800">{(item.value / 1000000).toFixed(0)}M</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Top Structures */}
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
           <div className="flex justify-between items-center mb-6">
            <h2 className="text-sm font-bold text-gray-800">Top 5 des structures</h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { name: 'CHU-MEL', val: 2845 },
              { name: 'Clinique Mahouna', val: 2157 },
              { name: 'Hôpital de Référence', val: 1892 },
              { name: 'CHIC Calavi', val: 1654 },
              { name: 'Clinique Atinkanmey', val: 1245 },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 font-bold w-4">{i + 1}</span>
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-[10px]">🏥</div>
                  <span className="font-medium text-gray-700">{item.name}</span>
                </div>
                <span className="text-gray-500 text-xs font-semibold">{item.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Repartition maladies */}
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
           <div className="flex justify-between items-center mb-6">
            <h2 className="text-sm font-bold text-gray-800">Maladies fréquentes</h2>
          </div>
          <div className="flex flex-col gap-3">
            {diseaseData.map((item, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600 font-medium">{item.name}</span>
                  <span className="text-gray-800 font-bold">{item.value}%</span>
                </div>
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#0FA958] h-full rounded-full" style={{ width: `${item.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dernieres Alertes */}
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
           <div className="flex justify-between items-center mb-6">
            <h2 className="text-sm font-bold text-gray-800">Alertes & Notifications</h2>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                <AlertTriangle size={14} className="text-red-500" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-800">SOS Santé déclenché</h4>
                <p className="text-[10px] text-gray-500">Nouveau SOS déclenché à Cotonou (PK10)</p>
              </div>
              <span className="text-[10px] text-gray-400 ml-auto whitespace-nowrap">Il y a 2 min</span>
            </div>
            
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-yellow-50 flex items-center justify-center shrink-0">
                <Wallet size={14} className="text-yellow-600" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-800">Paiement en attente</h4>
                <p className="text-[10px] text-gray-500">15 validations de factures requises</p>
              </div>
              <span className="text-[10px] text-gray-400 ml-auto whitespace-nowrap">Il y a 15 min</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
