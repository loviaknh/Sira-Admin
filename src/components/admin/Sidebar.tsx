"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  CreditCard, 
  Map, 
  UserPlus, 
  Calendar, 
  Pill, 
  Ambulance, 
  MessageSquare, 
  HeartPulse,
  BarChart3,
  ShieldCheck,
  Settings,
  ClipboardList,
  Headphones
} from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { label: 'Tableau de bord', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Gestion des utilisateurs', href: '/utilisateurs', icon: Users },
  { label: 'Dossier Médical (NIP)', href: '/dossiers', icon: FileText },
  { label: 'Mutuelle & Paiements', href: '/paiements', icon: CreditCard },
  { label: 'Réseau de soins', href: '/reseau', icon: Map },
  { label: 'Professionnels de santé', href: '/professionnels', icon: UserPlus },
  { label: 'Rendez-vous & Consultations', href: '/rendez-vous', icon: Calendar },
  { label: 'Pharmacie & Ordonnances', href: '/pharmacie', icon: Pill },
  { label: 'SOS Santé & Ambulances', href: '/sos-sante', icon: Ambulance },
  { label: 'Plaintes & Suggestions', href: '/plaintes', icon: MessageSquare, badge: '59' },
  { label: 'Don de sang', href: '/don-de-sang', icon: HeartPulse },
  { label: 'Rapports & Analyses', href: '/rapports', icon: BarChart3 },
  { label: 'Gouvernance & Qualité', href: '/gouvernance', icon: ShieldCheck },
  { label: 'Paramètres', href: '/parametres', icon: Settings },
  { label: 'Audit & Traçabilité', href: '/audit', icon: ClipboardList },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#0F5B46] text-white flex flex-col h-screen sticky top-0 overflow-y-auto hidden md:flex">
      {/* Logo */}
      <div className="p-6 flex flex-col items-start gap-1 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0F5B46]">
            <HeartPulse size={20} />
          </div>
          <h1 className="text-2xl font-bold">Sira</h1>
        </div>
        <p className="text-xs text-green-100/70 mt-1">Plateforme Nationale<br/>de Santé</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (pathname === '/' && item.href === '/dashboard');
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={clsx(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium group",
                isActive 
                  ? "bg-[#0FA958] text-white" 
                  : "text-green-50 hover:bg-white/10"
              )}
            >
              <Icon size={18} className={clsx(isActive ? "text-white" : "text-green-200 group-hover:text-white")} />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="bg-[#F2A900] text-[#0F5B46] text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Support Technique */}
      <div className="p-4 mt-auto">
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck size={16} className="text-[#0FA958]" />
            <span className="text-xs font-semibold">Support technique</span>
          </div>
          <p className="text-[10px] text-green-200 mb-3">Disponible 24/7</p>
          <button className="w-full flex items-center justify-center gap-2 bg-[#0FA958] hover:bg-[#0B8A47] transition-colors text-white text-xs font-medium py-2 rounded-lg">
            <Headphones size={14} />
            Contacter le support
          </button>
        </div>
      </div>
    </aside>
  );
}
