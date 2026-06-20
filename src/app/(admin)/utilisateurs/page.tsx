"use client";

import { useState } from "react";
import { DataTable, Column } from "@/components/admin/DataTable";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { Check, X, Search, Filter } from "lucide-react";

type UserKyc = {
  id: string;
  nom: string;
  prenom: string;
  npi: string;
  telephone: string;
  commune: string;
  dateInscription: string;
  statut: string;
  photoUrl: string;
  idCardUrl: string;
};

const mockData: UserKyc[] = [
  { id: "1", nom: "Dossou", prenom: "Kossi", npi: "1002345678", telephone: "+229 97 00 00 01", commune: "Cotonou", dateInscription: "2026-06-18", statut: "En attente", photoUrl: "https://i.pravatar.cc/150?img=11", idCardUrl: "https://i.pravatar.cc/300?img=11" },
  { id: "2", nom: "Sylla", prenom: "Aminata", npi: "1009876543", telephone: "+229 96 11 22 33", commune: "Parakou", dateInscription: "2026-06-19", statut: "Vérifié", photoUrl: "https://i.pravatar.cc/150?img=5", idCardUrl: "https://i.pravatar.cc/300?img=5" },
  { id: "3", nom: "Ahouefa", prenom: "Sena", npi: "1005554443", telephone: "+229 95 44 55 66", commune: "Porto-Novo", dateInscription: "2026-06-20", statut: "En attente", photoUrl: "https://i.pravatar.cc/150?img=9", idCardUrl: "https://i.pravatar.cc/300?img=9" },
  { id: "4", nom: "Chakoun", prenom: "Raoul", npi: "1001112223", telephone: "+229 90 99 88 77", commune: "Abomey-Calavi", dateInscription: "2026-06-15", statut: "Suspendu", photoUrl: "https://i.pravatar.cc/150?img=33", idCardUrl: "https://i.pravatar.cc/300?img=33" },
];

export default function UtilisateursPage() {
  const [selectedUser, setSelectedUser] = useState<UserKyc | null>(null);

  const columns: Column<UserKyc>[] = [
    { header: "Citoyen", accessor: (row) => (
      <div className="flex items-center gap-3">
        <img src={row.photoUrl} alt="Avatar" className="w-10 h-10 rounded-full object-cover" />
        <div>
          <p className="font-semibold text-slate-800">{row.nom} {row.prenom}</p>
          <p className="text-xs text-slate-500">{row.telephone}</p>
        </div>
      </div>
    )},
    { header: "NPI (ANIP)", accessor: (row) => <span className="font-mono bg-slate-100 px-2 py-1 rounded text-slate-600">{row.npi}</span> },
    { header: "Commune", accessor: "commune" },
    { header: "Date d'inscription", accessor: "dateInscription" },
    { header: "Statut", accessor: (row) => <StatusBadge status={row.statut} /> },
    { header: "Actions", accessor: (row) => (
      <button 
        onClick={(e) => { e.stopPropagation(); setSelectedUser(row); }}
        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-colors"
      >
        Détails KYC
      </button>
    )},
  ];

  return (
    <div className="flex h-[calc(100vh-80px)] gap-6 overflow-hidden">
      <div className={`flex-1 flex flex-col space-y-6 overflow-y-auto pr-2 ${selectedUser ? 'hidden lg:flex' : 'flex'}`}>
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Citoyens & KYC</h1>
          <p className="text-slate-500 mt-2">Validez les identités numériques nationales.</p>
        </div>

        <div className="flex gap-4 mb-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input type="text" placeholder="Rechercher par NPI, nom, téléphone..." className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl flex items-center gap-2 text-slate-600 hover:bg-slate-50">
            <Filter size={20} />
            <span>Filtres</span>
          </button>
        </div>

        <DataTable data={mockData} columns={columns} onRowClick={(row) => setSelectedUser(row)} />
      </div>

      {selectedUser && (
        <div className="w-full lg:w-[400px] xl:w-[500px] bg-white rounded-2xl border border-slate-100 shadow-xl flex flex-col overflow-hidden animate-in slide-in-from-right-8 duration-300">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
            <h2 className="text-xl font-bold text-slate-800">Dossier KYC</h2>
            <button onClick={() => setSelectedUser(null)} className="p-2 hover:bg-slate-200 rounded-full text-slate-500 transition-colors">
              <X size={24} />
            </button>
          </div>
          
          <div className="p-6 flex-1 overflow-y-auto space-y-8">
            <div className="flex items-center gap-4">
              <img src={selectedUser.photoUrl} alt="Selfie" className="w-24 h-24 rounded-2xl object-cover border-4 border-slate-100 shadow-sm" />
              <div>
                <h3 className="text-2xl font-bold text-slate-800">{selectedUser.nom} {selectedUser.prenom}</h3>
                <StatusBadge status={selectedUser.statut} />
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-slate-700 uppercase tracking-wider text-sm">Vérification ANIP</h4>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-500">NPI Soumis</span>
                  <span className="font-mono font-medium text-slate-800">{selectedUser.npi}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Score de similarité visage</span>
                  <span className="font-medium text-emerald-600">98.4%</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-slate-700 uppercase tracking-wider text-sm">Pièce d'Identité</h4>
              <div className="w-full h-48 bg-slate-200 rounded-xl overflow-hidden border border-slate-200 relative group">
                <img src={selectedUser.idCardUrl} alt="ID Card" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-medium">Agrandir le document</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-slate-100 bg-slate-50 flex gap-4">
            <button className="flex-1 py-3 bg-rose-100 text-rose-700 font-semibold rounded-xl hover:bg-rose-200 transition-colors flex items-center justify-center gap-2">
              <X size={20} /> Rejeter
            </button>
            <button className="flex-1 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2">
              <Check size={20} /> Valider l'identité
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
