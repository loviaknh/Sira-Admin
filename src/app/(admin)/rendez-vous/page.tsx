"use client";

import { Calendar as CalendarIcon, Clock, Video, MapPin, User, Check, X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import clsx from 'clsx';

const mockRDV = [
  { id: 1, patient: "HOUENANOU A. Kassi", medecin: "Dr. Pascal HOUNKPÈ", type: "Présentiel", date: "Aujourd'hui", time: "14:30 - 15:00", status: "Confirmé", location: "CHU-MEL, Salle 4" },
  { id: 2, patient: "ZOUNON M. Clarisse", medecin: "Dr. Akouavi ZINSOU", type: "Téléconsultation", date: "Aujourd'hui", time: "15:15 - 15:45", status: "En attente", location: "Google Meet" },
  { id: 3, patient: "DOSSOU Y. Samuel", medecin: "Dr. Pascal HOUNKPÈ", type: "Présentiel", date: "Demain", time: "09:00 - 09:30", status: "Confirmé", location: "CHU-MEL, Salle 4" },
  { id: 4, patient: "KPADONOU S. Esther", medecin: "Dr. Sèna BIO", type: "Présentiel", date: "Demain", time: "10:30 - 11:00", status: "Annulé", location: "Cabinet Privé" },
];

export default function RendezVousPage() {
  return (
    <div className="flex flex-col gap-6 h-[calc(100vh-8rem)]">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Rendez-vous & Consultations</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Gestion de l'agenda et des téléconsultations</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            Aujourd'hui
          </button>
          <div className="flex items-center gap-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-1">
            <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"><ChevronLeft size={20} className="text-gray-500" /></button>
            <span className="text-sm font-bold text-gray-700 dark:text-gray-300 px-2">Juin 2026</span>
            <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"><ChevronRight size={20} className="text-gray-500" /></button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-6 overflow-hidden">
        
        {/* Left Sidebar: Upcoming list */}
        <div className="w-full lg:w-[400px] flex flex-col gap-4 overflow-y-auto pr-2">
          
          {/* Mini Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Total aujourd'hui</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">42</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Téléconsultations</p>
              <p className="text-2xl font-bold text-[#0FA958]">18</p>
            </div>
          </div>

          {/* List */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm flex-1 p-4 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-gray-800 dark:text-gray-100">Prochains RDV</h2>
              <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"><Filter size={16}/></button>
            </div>

            <div className="space-y-3 flex-1 overflow-y-auto">
              {mockRDV.map(rdv => (
                <div key={rdv.id} className="p-3 border border-gray-100 dark:border-gray-700 rounded-xl hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-[#0FA958] bg-[#0FA958]/10 px-2 py-0.5 rounded">{rdv.time}</span>
                    <span className={clsx(
                      "text-[10px] font-bold px-1.5 py-0.5 rounded",
                      rdv.status === 'Confirmé' ? "bg-green-100 text-green-700 dark:bg-green-900/30" :
                      rdv.status === 'En attente' ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30" :
                      "bg-red-100 text-red-700 dark:bg-red-900/30"
                    )}>{rdv.status}</span>
                  </div>
                  <h3 className="font-bold text-gray-800 dark:text-gray-200 text-sm mb-1">{rdv.patient}</h3>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1"><User size={12} /> {rdv.medecin}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      {rdv.type === 'Téléconsultation' ? <Video size={12} className="text-blue-500" /> : <MapPin size={12} />}
                      {rdv.location}
                    </p>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-gray-50 dark:border-gray-700 flex gap-2">
                    {rdv.type === 'Téléconsultation' && rdv.status === 'Confirmé' ? (
                      <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-1.5 rounded text-xs font-bold transition-colors">
                        Rejoindre l'appel
                      </button>
                    ) : (
                      <>
                        <button className="flex-1 bg-gray-50 dark:bg-gray-700 hover:bg-green-50 text-green-600 py-1.5 rounded text-xs font-bold transition-colors flex items-center justify-center gap-1">
                          <Check size={14}/> Confirmer
                        </button>
                        <button className="flex-1 bg-gray-50 dark:bg-gray-700 hover:bg-red-50 text-red-500 py-1.5 rounded text-xs font-bold transition-colors flex items-center justify-center gap-1">
                          <X size={14}/> Annuler
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Area: Weekly Calendar Mock */}
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden flex flex-col">
          {/* Header */}
          <div className="grid grid-cols-6 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
            <div className="p-3 border-r border-gray-100 dark:border-gray-700 text-center">
              <Clock className="mx-auto text-gray-400" size={18} />
            </div>
            {['Lun 22', 'Mar 23', 'Mer 24', 'Jeu 25', 'Ven 26'].map((day, i) => (
              <div key={i} className="p-3 border-r border-gray-100 dark:border-gray-700 text-center">
                <span className={clsx("text-sm font-bold", i === 0 ? "text-[#0FA958]" : "text-gray-600 dark:text-gray-300")}>{day}</span>
              </div>
            ))}
          </div>
          
          {/* Body */}
          <div className="flex-1 overflow-y-auto">
            <div className="relative" style={{ height: '800px' }}>
              {/* Time Slots */}
              {[8,9,10,11,12,13,14,15,16,17].map((hour) => (
                <div key={hour} className="absolute w-full border-b border-gray-50 dark:border-gray-800 flex" style={{ top: `${(hour-8)*80}px`, height: '80px' }}>
                  <div className="w-[16.66%] border-r border-gray-100 dark:border-gray-800 p-2 text-xs text-gray-400 font-medium text-center">
                    {hour}:00
                  </div>
                  <div className="w-[16.66%] border-r border-gray-50 dark:border-gray-800"></div>
                  <div className="w-[16.66%] border-r border-gray-50 dark:border-gray-800"></div>
                  <div className="w-[16.66%] border-r border-gray-50 dark:border-gray-800"></div>
                  <div className="w-[16.66%] border-r border-gray-50 dark:border-gray-800"></div>
                  <div className="w-[16.66%]"></div>
                </div>
              ))}
              
              {/* Faux Events */}
              <div className="absolute left-[16.66%] w-[16.66%] p-1" style={{ top: '120px', height: '80px' }}>
                <div className="bg-blue-50 border-l-2 border-blue-500 h-full rounded p-2 overflow-hidden shadow-sm">
                  <p className="text-xs font-bold text-blue-700">Visio: A. Kassi</p>
                  <p className="text-[10px] text-blue-600">09:30 - 10:30</p>
                </div>
              </div>

              <div className="absolute left-[33.33%] w-[16.66%] p-1" style={{ top: '240px', height: '40px' }}>
                <div className="bg-green-50 border-l-2 border-[#0FA958] h-full rounded p-1 overflow-hidden shadow-sm">
                  <p className="text-[10px] font-bold text-green-700">M. Clarisse</p>
                </div>
              </div>

              <div className="absolute left-[50%] w-[16.66%] p-1" style={{ top: '400px', height: '120px' }}>
                <div className="bg-orange-50 border-l-2 border-orange-500 h-full rounded p-2 overflow-hidden shadow-sm">
                  <p className="text-xs font-bold text-orange-700">Réunion Staff</p>
                  <p className="text-[10px] text-orange-600">CHU-MEL</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
