"use client";

import { MapPin, Phone, Calendar as CalendarIcon, FileText, Download, Activity, HeartPulse, ShieldAlert, FileOutput, Pill } from 'lucide-react';
import clsx from 'clsx';

export default function DossierMedicalPage() {
  return (
    <div className="flex flex-col gap-6">
      
      {/* Top Banner & Profile */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="h-24 bg-gradient-to-r from-[#0F5B46] to-[#0FA958]"></div>
        <div className="px-6 pb-6 relative">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="flex items-end gap-5 -mt-10">
              <div className="w-24 h-24 rounded-full border-4 border-white bg-white overflow-hidden shadow-md">
                <img src="https://i.pravatar.cc/300" alt="Patient Profile" className="w-full h-full object-cover" />
              </div>
              <div className="mb-1">
                <h1 className="text-2xl font-bold text-gray-800">HOUENANOU A. Kassi</h1>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-gray-500 font-medium">
                  <span className="flex items-center gap-1 text-[#0FA958] font-bold"><ShieldAlert size={14} /> NIP: 1234 5678 9123</span>
                  <span className="flex items-center gap-1"><CalendarIcon size={14} /> 32 ans</span>
                  <span className="flex items-center gap-1 text-red-500 font-bold"><HeartPulse size={14} /> Groupe: O+</span>
                  <span className="flex items-center gap-1"><MapPin size={14} /> Cotonou, Littoral</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-gray-200 text-gray-700 rounded-lg font-medium text-sm hover:bg-gray-50 flex items-center gap-2">
                Voir QR Code
              </button>
              <button className="px-4 py-2 bg-[#0FA958] text-white rounded-lg font-medium text-sm hover:bg-[#0B8A47] flex items-center gap-2">
                Modifier
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Sidebar (Navigation Intra-dossier) */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-2 flex flex-col gap-1">
            {[
              { label: 'Résumé', icon: Activity, active: true },
              { label: 'Antécédents', icon: FileText, active: false },
              { label: 'Consultations', icon: CalendarIcon, active: false },
              { label: 'Ordonnances', icon: FileOutput, active: false },
              { label: 'Examens & Analyses', icon: Activity, active: false },
              { label: 'Imagerie', icon: FileText, active: false },
              { label: 'Hospitalisations', icon: HeartPulse, active: false },
              { label: 'Documents', icon: Download, active: false },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <button 
                  key={i}
                  className={clsx(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors w-full text-left",
                    item.active ? "bg-[#E6F7EE] text-[#0FA958]" : "text-gray-600 hover:bg-gray-50"
                  )}
                >
                  <Icon size={18} className={clsx(item.active ? "text-[#0FA958]" : "text-gray-400")} />
                  {item.label}
                </button>
              )
            })}
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <h3 className="text-sm font-bold text-gray-800 mb-4">Informations d'urgence</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-gray-50 pb-2">
                <span className="text-gray-500">Contact d'urgence</span>
                <span className="font-medium text-gray-800">Marie HOUENANOU</span>
              </div>
              <div className="flex justify-between border-b border-gray-50 pb-2">
                <span className="text-gray-500">Téléphone</span>
                <span className="font-medium text-gray-800">+229 97 00 11 22</span>
              </div>
              <div className="flex justify-between border-b border-gray-50 pb-2">
                <span className="text-gray-500">Allergies</span>
                <span className="font-medium text-red-500 bg-red-50 px-2 py-0.5 rounded">Pénicilline</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="text-gray-500">Maladies chron.</span>
                <span className="font-medium text-gray-800">Aucune</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Historique médical timeline */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-800">Historique médical récent</h2>
              <button className="text-sm text-[#0FA958] font-medium hover:underline">Voir tout</button>
            </div>

            <div className="relative border-l-2 border-gray-100 ml-3 space-y-8">
              
              {/* Event 1 */}
              <div className="relative pl-6">
                <div className="absolute w-4 h-4 rounded-full bg-[#0FA958] border-4 border-white -left-[9px] top-1"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-800">Consultation - Médecine générale</h3>
                  <span className="text-xs font-semibold text-gray-500">Il y a 5 jours</span>
                </div>
                <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 mb-2">
                  <p className="text-sm text-gray-600 mb-2"><span className="font-semibold text-gray-700">Médecin :</span> Dr. Pascal HOUNKPÈ (CHU-MEL)</p>
                  <p className="text-sm text-gray-600"><span className="font-semibold text-gray-700">Motif :</span> Fièvre persistante et maux de tête depuis 3 jours. Test Paludisme positif.</p>
                </div>
                <button className="text-xs text-[#0FA958] font-bold border border-[#0FA958]/30 px-3 py-1 rounded bg-[#E6F7EE] hover:bg-[#0FA958] hover:text-white transition-colors">
                  Voir détails
                </button>
              </div>

              {/* Event 2 */}
              <div className="relative pl-6">
                <div className="absolute w-4 h-4 rounded-full bg-blue-500 border-4 border-white -left-[9px] top-1"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-800">Ordonnance délivrée</h3>
                  <span className="text-xs font-semibold text-gray-500">14 Juin 2026</span>
                </div>
                <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Pill size={16} className="text-blue-600" />
                    <span className="text-sm font-medium text-gray-800">Paracétamol 1000mg, Coartem</span>
                  </div>
                  <p className="text-xs text-gray-500">Pharmacie Mahouna (Servie)</p>
                </div>
              </div>

              {/* Event 3 */}
              <div className="relative pl-6">
                <div className="absolute w-4 h-4 rounded-full bg-purple-500 border-4 border-white -left-[9px] top-1"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-800">Analyse sang</h3>
                  <span className="text-xs font-semibold text-gray-500">14 Juin 2026</span>
                </div>
                <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">PDF</div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Résultats_Goutte_Epesse.pdf</p>
                      <p className="text-xs text-gray-500">1.2 MB</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-[#0FA958]"><Download size={18} /></button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
