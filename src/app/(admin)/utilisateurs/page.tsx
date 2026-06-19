"use client";

import { Search, Filter, Plus, MoreHorizontal, CheckCircle2, XCircle } from 'lucide-react';
import clsx from 'clsx';

const mockUsers = [
  { id: '1', nom: 'HOUENANOU A. Kassi', nip: '1234 5678 9123', tel: '+229 97 00 00 01', region: 'Littoral', role: 'Patient', assurance: 'Oui', statut: 'Actif' },
  { id: '2', nom: 'ZOUNON M. Clarisse', nip: '1234 5678 9124', tel: '+229 95 00 00 02', region: 'Borgou', role: 'Patient', assurance: 'Non', statut: 'Actif' },
  { id: '3', nom: 'AGBAYA P. Aristide', nip: '1234 5678 9125', tel: '+229 96 00 00 03', region: 'Littoral', role: 'Médecin', assurance: 'Oui', statut: 'Inactif' },
  { id: '4', nom: 'DOSSOU Y. Samuel', nip: '1234 5678 9126', tel: '+229 90 00 00 04', region: 'Atlantique', role: 'Patient', assurance: 'Non', statut: 'Actif' },
  { id: '5', nom: 'KPADONOU S. Esther', nip: '1234 5678 9127', tel: '+229 67 00 00 05', region: 'Zou', role: 'Pharmacien', assurance: 'Oui', statut: 'Actif' },
];

export default function UtilisateursPage() {
  return (
    <div className="flex flex-col gap-6">
      
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Utilisateurs</h1>
          <p className="text-sm text-gray-500">Rechercher par NIP, nom, téléphone...</p>
        </div>
        <button className="bg-[#0FA958] hover:bg-[#0B8A47] text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors">
          <Plus size={18} />
          Ajouter un utilisateur
        </button>
      </div>

      {/* Filters Row */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 flex flex-wrap gap-4 items-end shadow-sm">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-xs font-semibold text-gray-500 mb-1">Recherche</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Ex: 1234 5678..."
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#0FA958]/20 outline-none"
            />
          </div>
        </div>
        <div className="w-40">
          <label className="block text-xs font-semibold text-gray-500 mb-1">Rôle</label>
          <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none">
            <option>Tous</option>
            <option>Patient</option>
            <option>Médecin</option>
          </select>
        </div>
        <div className="w-40">
          <label className="block text-xs font-semibold text-gray-500 mb-1">Région</label>
          <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none">
            <option>Toutes</option>
            <option>Littoral</option>
            <option>Borgou</option>
          </select>
        </div>
        <div className="w-40">
          <label className="block text-xs font-semibold text-gray-500 mb-1">Statut</label>
          <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none">
            <option>Tous</option>
            <option>Actif</option>
            <option>Inactif</option>
          </select>
        </div>
        <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg font-medium text-sm hover:bg-gray-200 flex items-center gap-2">
          <Filter size={16} />
          Filtrer
        </button>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total utilisateurs', val: '10 423', color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Patients', val: '9 256', color: 'text-green-600', bg: 'bg-green-50' },
          { label: 'Professionnels', val: '538', color: 'text-purple-600', bg: 'bg-purple-50' },
          { label: 'Administrateurs', val: '45', color: 'text-orange-600', bg: 'bg-orange-50' },
        ].map((stat, i) => (
          <div key={i} className={clsx("p-4 rounded-xl border border-gray-100", stat.bg)}>
            <p className="text-xs font-medium text-gray-600">{stat.label}</p>
            <p className={clsx("text-xl font-bold mt-1", stat.color)}>{stat.val}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                <th className="p-4 font-semibold">Nom complet</th>
                <th className="p-4 font-semibold">NIP</th>
                <th className="p-4 font-semibold">Téléphone</th>
                <th className="p-4 font-semibold">Région</th>
                <th className="p-4 font-semibold">Type</th>
                <th className="p-4 font-semibold">Assurance</th>
                <th className="p-4 font-semibold">Statut</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {mockUsers.map((user, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="p-4 font-medium text-gray-800 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${user.id}`} alt="avatar" />
                    </div>
                    {user.nom}
                  </td>
                  <td className="p-4 text-gray-600 font-mono text-xs">{user.nip}</td>
                  <td className="p-4 text-gray-600">{user.tel}</td>
                  <td className="p-4 text-gray-600">{user.region}</td>
                  <td className="p-4 text-gray-600">
                    <span className={clsx(
                      "px-2 py-1 rounded-md text-[10px] font-bold",
                      user.role === 'Patient' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                    )}>
                      {user.role}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600">
                    {user.assurance === 'Oui' ? (
                      <span className="text-green-600 flex items-center gap-1 text-xs font-semibold">
                        <CheckCircle2 size={14} /> Actif
                      </span>
                    ) : (
                      <span className="text-gray-400 flex items-center gap-1 text-xs">
                        <XCircle size={14} /> Non
                      </span>
                    )}
                  </td>
                  <td className="p-4">
                    <span className={clsx(
                      "px-2 py-1 rounded-full text-[10px] font-bold flex items-center w-fit gap-1",
                      user.statut === 'Actif' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                    )}>
                      <div className={clsx("w-1.5 h-1.5 rounded-full", user.statut === 'Actif' ? "bg-green-500" : "bg-gray-400")} />
                      {user.statut}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-gray-400 hover:text-gray-800 p-1">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination (Mock) */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
          <span>Affichage 1 à 5 sur 10 423 utilisateurs</span>
          <div className="flex gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 hover:bg-gray-50">«</button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-[#0FA958] text-white">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 hover:bg-gray-50">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 hover:bg-gray-50">3</button>
            <span className="w-8 h-8 flex items-center justify-center">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 hover:bg-gray-50">104</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 hover:bg-gray-50">»</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}
