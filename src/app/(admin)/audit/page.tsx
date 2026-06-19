"use client";

import { Shield, Activity, Search, Filter, AlertTriangle, Key, UserCheck, Eye, Terminal } from 'lucide-react';
import clsx from 'clsx';

const mockLogs = [
  { id: 'LOG-001', event: 'Connexion Réussie', user: 'admin@sira.bj', ip: '197.234.21.102', date: '21 Juin 2026 14:32:01', type: 'AUTH', severity: 'Info' },
  { id: 'LOG-002', event: 'Modification Dossier', user: 'dr.pascal@chu-mel.bj', ip: '197.234.11.45', date: '21 Juin 2026 14:15:22', type: 'DATA_WRITE', severity: 'Info' },
  { id: 'LOG-003', event: 'Tentative de connexion échouée (x5)', user: 'inconnu', ip: '185.12.3.90', date: '21 Juin 2026 12:05:10', type: 'SECURITY', severity: 'High' },
  { id: 'LOG-004', event: 'Export PDF Rapport Financier', user: 'admin@sira.bj', ip: '197.234.21.102', date: '21 Juin 2026 11:45:00', type: 'DATA_READ', severity: 'Info' },
  { id: 'LOG-005', event: 'Accès non autorisé (API)', user: 'token_expiré', ip: '41.138.90.12', date: '21 Juin 2026 09:30:15', type: 'API', severity: 'Warning' },
  { id: 'LOG-006', event: 'Création Nouvel Utilisateur', user: 'admin@sira.bj', ip: '197.234.21.102', date: '20 Juin 2026 16:20:00', type: 'SYSTEM', severity: 'Info' },
];

export default function AuditPage() {
  return (
    <div className="flex flex-col gap-6">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
            <Shield className="text-[#0FA958]" /> Audit & Traçabilité
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Journal des événements système et sécurité (Logs)</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-2">
            <Terminal size={16} />
            Exporter les logs (CSV)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-5 shadow-sm">
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">Événements (24h)</p>
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">14 250</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-5 shadow-sm border-l-4 border-l-red-500">
          <p className="text-xs text-red-500 font-bold mb-1">Alertes Critiques</p>
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">12 <AlertTriangle size={18} className="text-red-500"/></p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-5 shadow-sm">
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">Connexions Actives</p>
          <p className="text-2xl font-bold text-green-600">342</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col overflow-hidden">
        
        {/* Filters */}
        <div className="p-4 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/50 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
              <input type="text" placeholder="Rechercher IP, Email..." className="pl-8 pr-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-xs outline-none w-64 dark:text-gray-200" />
            </div>
            <select className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-xs outline-none text-gray-600 dark:text-gray-300">
              <option>Tous les événements</option>
              <option>AUTH</option>
              <option>SECURITY</option>
              <option>DATA_WRITE</option>
            </select>
          </div>
          <button className="text-xs font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-1 hover:text-gray-800 dark:hover:text-gray-200">
            <Filter size={14} /> Filtres avancés
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-400 text-[10px] uppercase tracking-wider border-b border-gray-100 dark:border-gray-700">
                <th className="p-4 font-semibold">Horodatage</th>
                <th className="p-4 font-semibold">Événement</th>
                <th className="p-4 font-semibold">Utilisateur</th>
                <th className="p-4 font-semibold">Adresse IP</th>
                <th className="p-4 font-semibold">Catégorie</th>
                <th className="p-4 font-semibold text-right">Sévérité</th>
              </tr>
            </thead>
            <tbody className="text-sm font-mono text-xs">
              {mockLogs.map((log) => (
                <tr key={log.id} className="border-b border-gray-50 dark:border-gray-700 hover:bg-gray-50/50 dark:hover:bg-gray-700/50">
                  <td className="p-4 text-gray-500 dark:text-gray-400">{log.date}</td>
                  <td className="p-4 font-medium text-gray-800 dark:text-gray-200 font-sans text-sm">{log.event}</td>
                  <td className="p-4 text-gray-600 dark:text-gray-300">{log.user}</td>
                  <td className="p-4 text-gray-500 dark:text-gray-400">{log.ip}</td>
                  <td className="p-4">
                    <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded font-bold text-[10px]">
                      {log.type}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <span className={clsx(
                      "text-[10px] font-bold px-2 py-0.5 rounded ml-auto w-fit",
                      log.severity === 'Info' ? "text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400" :
                      log.severity === 'Warning' ? "text-orange-600 bg-orange-50 dark:bg-orange-900/30 dark:text-orange-400" :
                      "text-red-600 bg-red-50 dark:bg-red-900/30 dark:text-red-400"
                    )}>{log.severity}</span>
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
