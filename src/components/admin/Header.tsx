"use client";

import { Bell, Search, Menu, Mail, ChevronDown, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between px-6 sticky top-0 z-10 transition-colors">
      <div className="flex items-center gap-4 flex-1">
        <button className="md:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <Menu size={24} />
        </button>
        
        <div className="hidden md:flex items-center gap-2">
          <Menu size={20} className="text-gray-400 dark:text-gray-500" />
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Tableau de bord</h2>
        </div>

        <div className="hidden md:flex max-w-md w-full ml-8 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={16} />
          <input 
            type="text" 
            placeholder="Rechercher un patient, un professionnel, une structure..." 
            className="w-full pl-10 pr-12 py-2 bg-gray-50 dark:bg-gray-800 border-none rounded-full text-sm focus:ring-2 focus:ring-[#0FA958]/20 outline-none text-gray-800 dark:text-gray-200"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <span className="text-[10px] text-gray-400 font-medium border border-gray-200 dark:border-gray-700 px-1.5 rounded">Ctrl</span>
            <span className="text-[10px] text-gray-400 font-medium border border-gray-200 dark:border-gray-700 px-1.5 rounded">K</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* Theme Toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors bg-gray-50 dark:bg-gray-800 rounded-full"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        )}

        {/* Country selector */}
        <div className="hidden sm:flex items-center gap-2 cursor-pointer">
          <div className="w-5 h-5 rounded-full overflow-hidden bg-green-600 flex relative">
            <div className="absolute left-0 w-2 h-full bg-green-600"></div>
            <div className="absolute left-2 top-0 w-3 h-2.5 bg-yellow-400"></div>
            <div className="absolute left-2 bottom-0 w-3 h-2.5 bg-red-600"></div>
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Bénin</span>
          <ChevronDown size={14} className="text-gray-400" />
        </div>

        <div className="flex items-center gap-3">
          <button className="relative p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full text-[9px] text-white flex items-center justify-center font-bold border-2 border-white dark:border-gray-900">
              12
            </span>
          </button>
          
          <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors hidden sm:block">
            <Mail size={20} />
          </button>
        </div>

        <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block"></div>

        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700">
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-bold text-gray-800 dark:text-gray-100">Dr. Administrateur</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Super Administrateur</p>
          </div>
        </div>
      </div>
    </header>
  );
}
