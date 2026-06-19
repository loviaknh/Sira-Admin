"use client";

import { Ambulance, MapPin, PhoneCall, AlertTriangle, Clock, Map as MapIcon, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

export default function SOSSantePage() {
  return (
    <div className="flex flex-col gap-6 h-[calc(100vh-8rem)]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">SOS Santé & Ambulances</h1>
          <p className="text-sm text-gray-500">Gestion des urgences et flotte d'ambulances en temps réel</p>
        </div>
        <div className="flex gap-2 text-sm font-medium">
          <div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg border border-red-100 flex items-center gap-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            3 SOS Actifs
          </div>
          <div className="bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-200 flex items-center gap-2 shadow-sm">
            <Ambulance size={18} className="text-[#0FA958]" />
            12 / 85 Disponibles
          </div>
        </div>
      </div>

      {/* Main Map Content */}
      <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Sidebar (Alerts) */}
        <div className="w-full md:w-80 border-r border-gray-100 flex flex-col">
          <div className="p-4 border-b border-gray-100 bg-gray-50/50">
            <h2 className="font-bold text-gray-800 flex items-center gap-2">
              <AlertTriangle size={18} className="text-red-500" />
              Alertes Récentes
            </h2>
          </div>
          
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {/* Alert 1 */}
            <div className="border border-red-200 bg-red-50/30 rounded-lg p-3 cursor-pointer hover:bg-red-50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded">URGENCE VITALE</span>
                <span className="text-xs text-gray-500 font-medium">14:12</span>
              </div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">SOS 2026-001</h3>
              <p className="text-xs text-gray-600 flex items-center gap-1 mb-2"><MapPin size={12} /> Cotonou, Akpakpa PK10</p>
              
              <div className="bg-white border border-gray-100 rounded p-2 flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-red-100 flex items-center justify-center text-red-500"><Ambulance size={12}/></div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-800">Ambulance #307</p>
                    <p className="text-[9px] text-gray-500">En route (ETA: 5 min)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Alert 2 */}
            <div className="border border-orange-200 bg-orange-50/30 rounded-lg p-3 cursor-pointer hover:bg-orange-50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <span className="bg-orange-100 text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded">URGENCE</span>
                <span className="text-xs text-gray-500 font-medium">14:05</span>
              </div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">SOS 2026-002</h3>
              <p className="text-xs text-gray-600 flex items-center gap-1"><MapPin size={12} /> Abomey-Calavi, Arsy</p>
              <div className="mt-2 text-xs text-orange-600 font-medium flex items-center gap-1">
                <Clock size={12} /> En attente d'assignation
              </div>
            </div>

             {/* Alert 3 */}
             <div className="border border-gray-200 bg-gray-50/50 rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors opacity-70">
              <div className="flex justify-between items-start mb-2">
                <span className="bg-gray-200 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded">RÉSOLU</span>
                <span className="text-xs text-gray-500 font-medium">13:30</span>
              </div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">SOS 2026-003</h3>
              <p className="text-xs text-gray-600 flex items-center gap-1"><MapPin size={12} /> Porto-Novo, Ouando</p>
              <p className="text-[10px] text-gray-500 mt-1">Patient transféré au CHUD Ouémé</p>
            </div>
          </div>
        </div>

        {/* Map Area */}
        <div className="flex-1 bg-blue-50/30 relative">
          {/* Note: In a real app we use react-leaflet here. For the mockup, we use a placeholder that looks exactly like the image map area */}
          <div className="absolute inset-0 bg-[#e5e9ea] overflow-hidden flex items-center justify-center">
            {/* Faux carte */}
            <div className="w-full h-full opacity-60 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply"></div>
            
            {/* Faux Route / Lac */}
            <div className="absolute top-1/3 left-0 right-0 h-32 bg-blue-100/50 -rotate-12 transform scale-150"></div>
            
            {/* Pins */}
            <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="bg-red-500 text-white rounded-lg px-3 py-2 shadow-lg flex flex-col gap-1 w-48 animate-pulse-soft z-10">
                <div className="flex justify-between items-center border-b border-white/20 pb-1 mb-1">
                  <span className="font-bold text-sm">SOS 2026-001</span>
                  <AlertTriangle size={14} />
                </div>
                <div className="text-xs space-y-1">
                  <p className="flex justify-between"><span>Patient:</span> <strong>HOUENANOU A.</strong></p>
                  <p className="flex justify-between"><span>Position:</span> <strong>Cotonou</strong></p>
                </div>
                <button className="mt-2 bg-white text-red-500 text-xs font-bold py-1 rounded">Voir détails</button>
              </div>
              <div className="w-4 h-4 bg-red-500 rotate-45 -mt-2 shadow-lg"></div>
            </div>

            <div className="absolute top-[40%] right-1/3 transform -translate-x-1/2 flex flex-col items-center">
              <div className="bg-white border border-gray-200 rounded-full p-2 shadow-md">
                <Ambulance size={20} className="text-[#0FA958]" />
              </div>
            </div>
            
            <div className="absolute bottom-1/3 right-1/4 transform -translate-x-1/2 flex flex-col items-center">
              <div className="bg-white border border-gray-200 rounded-full p-2 shadow-md">
                <MapIcon size={20} className="text-blue-500" />
              </div>
              <span className="bg-white text-[10px] font-bold px-1.5 py-0.5 mt-1 rounded shadow-sm">CHU-MEL</span>
            </div>
            
            {/* Map Controls */}
            <div className="absolute bottom-4 right-4 flex flex-col gap-2">
              <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 font-bold text-xl">+</button>
              <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 font-bold text-xl">-</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
