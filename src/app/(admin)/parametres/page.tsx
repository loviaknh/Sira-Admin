"use client";

import { User, Bell, Lock, Globe, Database, Shield } from 'lucide-react';
import clsx from 'clsx';
import { useState } from 'react';

const tabs = [
  { id: 'profile', label: 'Mon Profil', icon: User },
  { id: 'security', label: 'Sécurité & Accès', icon: Lock },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'system', label: 'Système', icon: Database },
  { id: 'regional', label: 'Régional', icon: Globe },
];

export default function ParametresPage() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="flex flex-col gap-6">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Paramètres système</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Configuration globale de la plateforme Sira</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Settings Sidebar */}
        <div className="w-full lg:w-64 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-3 h-fit">
          <nav className="flex flex-col gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={clsx(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors w-full text-left",
                    activeTab === tab.id 
                      ? "bg-[#0FA958]/10 text-[#0FA958] dark:bg-[#0FA958]/20" 
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                  )}
                >
                  <Icon size={18} className={activeTab === tab.id ? "text-[#0FA958]" : "text-gray-400"} />
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Settings Content */}
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 lg:p-8">
          
          {activeTab === 'profile' && (
            <div className="max-w-2xl">
              <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-6">Informations du Profil Administrateur</h2>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <button className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors mb-2">
                    Changer l'avatar
                  </button>
                  <p className="text-xs text-gray-500 dark:text-gray-400">JPG, GIF ou PNG. Max size de 800K</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Prénom</label>
                  <input type="text" defaultValue="Administrateur" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm outline-none text-gray-800 dark:text-gray-200" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Nom</label>
                  <input type="text" defaultValue="Sira" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm outline-none text-gray-800 dark:text-gray-200" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Adresse Email</label>
                  <input type="email" defaultValue="admin@sira.bj" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm outline-none text-gray-800 dark:text-gray-200" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Rôle assigné</label>
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg cursor-not-allowed text-gray-500 dark:text-gray-500">
                    <Shield size={16} className="text-blue-500" /> Super Administrateur
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-gray-100 dark:border-gray-700">
                <button className="bg-[#0FA958] hover:bg-[#0B8A47] text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-colors">
                  Sauvegarder les modifications
                </button>
              </div>
            </div>
          )}

          {activeTab === 'system' && (
            <div className="max-w-2xl">
              <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-6">Paramètres Généraux Sira</h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 border border-gray-100 dark:border-gray-700 rounded-xl">
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-gray-200 text-sm">Mode Maintenance</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Désactive l'accès public à l'API et à l'application mobile.</p>
                  </div>
                  <div className="w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full relative cursor-pointer">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-100 dark:border-gray-700 rounded-xl">
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-gray-200 text-sm">Authentification Double Facteur (2FA) obligatoire</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Force tous les professionnels de santé à utiliser le 2FA.</p>
                  </div>
                  <div className="w-12 h-6 bg-[#0FA958] rounded-full relative cursor-pointer">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform transform translate-x-6"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Placeholders for other tabs */}
          {(activeTab !== 'profile' && activeTab !== 'system') && (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <div className="w-16 h-16 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center mb-4 text-gray-400">
                <Lock size={32} />
              </div>
              <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">Section en cours de développement</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Cette page de paramètres sera disponible prochainement.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
