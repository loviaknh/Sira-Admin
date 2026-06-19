"use client";

import { Search, Filter, Plus, Star, MapPin, Building2, Phone, Mail } from 'lucide-react';
import clsx from 'clsx';

const mockProfessionals = [
  { id: 1, name: "Dr. Pascal HOUNKPÈ", specialty: "Médecine Générale", hospital: "CHU-MEL", rating: 4.8, reviews: 124, city: "Cotonou", status: "Disponible" },
  { id: 2, name: "Dr. Akouavi ZINSOU", specialty: "Pédiatrie", hospital: "Clinique Mahouna", rating: 4.9, reviews: 89, city: "Cotonou", status: "En consultation" },
  { id: 3, name: "Dr. Arnaud ADJOVI", specialty: "Cardiologie", hospital: "Hôpital de Référence", rating: 4.7, reviews: 210, city: "Abomey-Calavi", status: "Indisponible" },
  { id: 4, name: "Dr. Fifamè KPOSSOU", specialty: "Gynécologie", hospital: "CHU-MEL", rating: 4.6, reviews: 156, city: "Cotonou", status: "Disponible" },
  { id: 5, name: "Dr. Sèna BIO", specialty: "Dermatologie", hospital: "Cabinet Privé", rating: 4.5, reviews: 45, city: "Porto-Novo", status: "Disponible" },
  { id: 6, name: "Dr. Ousmane TRAORÉ", specialty: "Neurologie", hospital: "CHD Borgou", rating: 4.8, reviews: 312, city: "Parakou", status: "En congé" },
];

export default function ProfessionnelsPage() {
  return (
    <div className="flex flex-col gap-6">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Professionnels de santé</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Annuaire des médecins, spécialistes et infirmiers partenaires</p>
        </div>
        <button className="bg-[#0FA958] hover:bg-[#0B8A47] text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-2">
          <Plus size={16} />
          Ajouter un professionnel
        </button>
      </div>

      {/* Filters Row */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 flex flex-wrap gap-4 items-end shadow-sm">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">Recherche</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Nom du médecin, NPI..."
              className="w-full pl-9 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm outline-none dark:text-gray-200"
            />
          </div>
        </div>
        <div className="w-48">
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">Spécialité</label>
          <select className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm outline-none dark:text-gray-200">
            <option>Toutes les spécialités</option>
            <option>Cardiologie</option>
            <option>Pédiatrie</option>
          </select>
        </div>
        <div className="w-40">
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">Ville</label>
          <select className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm outline-none dark:text-gray-200">
            <option>Toutes</option>
            <option>Cotonou</option>
            <option>Parakou</option>
          </select>
        </div>
      </div>

      {/* Grid of Professionals */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockProfessionals.map((doc) => (
          <div key={doc.id} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=doc${doc.id}`} alt={doc.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-gray-100">{doc.name}</h3>
                  <p className="text-xs font-medium text-[#0FA958] bg-[#0FA958]/10 px-2 py-0.5 rounded-full w-fit mt-1">{doc.specialty}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                <Mail size={18} />
              </button>
            </div>

            <div className="space-y-2 mb-6 flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Building2 size={16} />
                <span>{doc.hospital}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin size={16} />
                <span>{doc.city}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <span className="font-bold text-gray-800 dark:text-gray-200">{doc.rating}</span>
                <span className="text-xs">({doc.reviews} avis)</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-50 dark:border-gray-700">
              <span className={clsx(
                "text-xs font-bold flex items-center gap-1.5",
                doc.status === 'Disponible' ? "text-green-600" :
                doc.status === 'En consultation' ? "text-orange-500" :
                "text-gray-400"
              )}>
                <span className={clsx(
                  "w-2 h-2 rounded-full",
                  doc.status === 'Disponible' ? "bg-green-500" :
                  doc.status === 'En consultation' ? "bg-orange-500" :
                  "bg-gray-400"
                )}></span>
                {doc.status}
              </span>
              
              <button className="text-sm font-semibold text-[#0FA958] border border-[#0FA958] px-3 py-1.5 rounded-lg hover:bg-[#0FA958] hover:text-white transition-colors">
                Voir profil
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
