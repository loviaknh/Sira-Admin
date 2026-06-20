"use client";

import { StatsCard } from "@/components/admin/StatsCard";
import { Activity, Shield, Users, HeartPulse, Hospital, TrendingUp } from "lucide-react";

export default function GouvernancePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Gouvernance Sanitaire</h1>
        <p className="text-slate-500 mt-2">Vision stratégique du Ministère de la Santé.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard title="Taux de Vaccination National" value="78.4%" icon={Shield} trend="4.2%" trendUp={true} color="text-indigo-600" />
        <StatsCard title="Taux d'Occupation Hôpitaux" value="82%" icon={Hospital} trend="1.5%" trendUp={false} color="text-rose-600" />
        <StatsCard title="Déserts Médicaux (Alerte)" value="14" icon={TrendingUp} trend="2" trendUp={false} color="text-amber-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            <HeartPulse className="text-rose-500" /> Pathologies Fréquentes (30 jours)
          </h3>
          <div className="space-y-6">
            <ProgressBar label="Paludisme" percentage={45} color="bg-rose-500" count="12,450 cas" />
            <ProgressBar label="Infections Respiratoires" percentage={25} color="bg-amber-500" count="8,230 cas" />
            <ProgressBar label="Maladies Diarrhéiques" percentage={15} color="bg-blue-500" count="4,100 cas" />
            <ProgressBar label="Hypertension Artérielle" percentage={10} color="bg-indigo-500" count="2,800 cas" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Activity className="text-emerald-500" /> Classement Qualité Établissements
          </h3>
          <div className="space-y-4">
            <RankingItem rank={1} name="Hôpital de Zone de Suru-Léré" score={98} />
            <RankingItem rank={2} name="CNHU-HKM Cotonou" score={94} />
            <RankingItem rank={3} name="Clinique Mahouna" score={91} />
            <RankingItem rank={4} name="Centre de Santé de Ouidah" score={88} />
            <RankingItem rank={5} name="Hôpital Mère-Enfant Lagune" score={85} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ label, percentage, color, count }: { label: string, percentage: number, color: string, count: string }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="font-semibold text-slate-700">{label}</span>
        <span className="text-slate-500">{count}</span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-2.5">
        <div className={`${color} h-2.5 rounded-full`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}

function RankingItem({ rank, name, score }: { rank: number, name: string, score: number }) {
  return (
    <div className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${rank === 1 ? 'bg-amber-100 text-amber-700' : rank === 2 ? 'bg-slate-200 text-slate-700' : rank === 3 ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-500'}`}>
        #{rank}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-slate-800">{name}</h4>
      </div>
      <div className="text-right">
        <span className="font-bold text-emerald-600">{score}/100</span>
      </div>
    </div>
  );
}
