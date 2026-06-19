import { Bell, Search, Menu, Mail, ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex items-center gap-4 flex-1">
        <button className="md:hidden text-gray-500 hover:text-gray-700">
          <Menu size={24} />
        </button>
        
        <div className="hidden md:flex items-center gap-2">
          <Menu size={20} className="text-gray-400" />
          <h2 className="text-lg font-semibold text-gray-800">Tableau de bord</h2>
        </div>

        <div className="hidden md:flex max-w-md w-full ml-8 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input 
            type="text" 
            placeholder="Rechercher un patient, un professionnel, une structure..." 
            className="w-full pl-10 pr-12 py-2 bg-gray-50 border-none rounded-full text-sm focus:ring-2 focus:ring-[#0FA958]/20 outline-none"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <span className="text-[10px] text-gray-400 font-medium border border-gray-200 px-1.5 rounded">Ctrl</span>
            <span className="text-[10px] text-gray-400 font-medium border border-gray-200 px-1.5 rounded">K</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* Country selector */}
        <div className="hidden sm:flex items-center gap-2 cursor-pointer">
          <div className="w-5 h-5 rounded-full overflow-hidden bg-green-600 flex relative">
            {/* Simple Benin flag placeholder */}
            <div className="absolute left-0 w-2 h-full bg-green-600"></div>
            <div className="absolute left-2 top-0 w-3 h-2.5 bg-yellow-400"></div>
            <div className="absolute left-2 bottom-0 w-3 h-2.5 bg-red-600"></div>
          </div>
          <span className="text-sm font-medium text-gray-700">Bénin</span>
          <ChevronDown size={14} className="text-gray-400" />
        </div>

        <div className="flex items-center gap-3">
          <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full text-[9px] text-white flex items-center justify-center font-bold border-2 border-white">
              12
            </span>
          </button>
          
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors hidden sm:block">
            <Mail size={20} />
          </button>
        </div>

        <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>

        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-bold text-gray-800">Dr. Administrateur</p>
            <p className="text-xs text-gray-500">Super Administrateur</p>
          </div>
        </div>
      </div>
    </header>
  );
}
