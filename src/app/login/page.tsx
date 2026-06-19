"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { HeartPulse, Lock, Mail } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate auth
    setTimeout(() => {
      router.push('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Header */}
        <div className="bg-[#0F5B46] p-8 text-center text-white">
          <div className="w-16 h-16 rounded-full bg-white mx-auto flex items-center justify-center mb-4">
            <HeartPulse size={32} className="text-[#0FA958]" />
          </div>
          <h1 className="text-2xl font-bold mb-1">Sira Admin</h1>
          <p className="text-green-100 text-sm">Plateforme Nationale de Santé</p>
        </div>

        {/* Form */}
        <div className="p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">Connexion au portail</h2>
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email ou NIP</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  required
                  placeholder="admin@sira.bj"
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0FA958]/20 focus:border-[#0FA958] outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0FA958]/20 focus:border-[#0FA958] outline-none transition-all"
                />
              </div>
              <div className="flex justify-end mt-2">
                <a href="#" className="text-xs text-[#0FA958] hover:underline font-medium">Mot de passe oublié ?</a>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-[#0FA958] hover:bg-[#0B8A47] text-white font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 mt-4"
            >
              {isLoading ? 'Connexion en cours...' : 'Se connecter'}
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-400">Accès restreint au personnel habilité. Toute tentative d'accès non autorisé sera enregistrée.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
