"use client";

import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { AlertTriangle, Activity, CheckCircle, ShieldAlert, CreditCard, Users, Menu, X } from "lucide-react";

type SosAlert = {
  id: string;
  patientId: string;
  latitude: number;
  longitude: number;
  statut: string;
  typeUrgence: string;
  createdAt: string;
};

export default function AdminDashboard() {
  const [alerts, setAlerts] = useState<SosAlert[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    // Connect to the backend
    const newSocket = io("http://localhost:3000", {
      transports: ["websocket"],
      // Admin should ideally pass a token here
      // auth: { token: 'ADMIN_TOKEN' }
    });

    setSocket(newSocket);

    // Listen to global admin alerts (we need to ensure backend sends this)
    newSocket.on("sos_created", (data: any) => {
      setAlerts((prev) => [data.alert, ...prev]);
    });

    newSocket.on("sos_update", (data: any) => {
      setAlerts((prev) =>
        prev.map((a) => (a.id === data.alert.id ? data.alert : a))
      );
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-red-700 text-white transition-all duration-300 flex flex-col`}>
        <div className="p-4 flex items-center justify-between">
          {isSidebarOpen && <span className="font-bold text-2xl tracking-tight">Sira<span className="font-light">Admin</span></span>}
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-red-800 rounded-lg">
            <Menu size={20} />
          </button>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-2">
          <NavItem icon={<ShieldAlert />} label="Urgences SOS" active isOpen={isSidebarOpen} />
          <NavItem icon={<Activity />} label="Centres de Santé" isOpen={isSidebarOpen} />
          <NavItem icon={<CreditCard />} label="Paiements Mutuelle" isOpen={isSidebarOpen} />
          <NavItem icon={<Users />} label="Patients (NPI)" isOpen={isSidebarOpen} />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b px-8 py-4 flex justify-between items-center shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-800">Centre de Contrôle National</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              <ShieldAlert className="text-gray-500" />
            </div>
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-700 font-bold">
              SA
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard title="Urgences en cours" value={alerts.filter(a => a.statut === 'EN_ATTENTE' || a.statut === 'EN_COURS').length} icon={<AlertTriangle size={24} className="text-red-500" />} color="bg-red-50" />
            <StatCard title="Ambulances déployées" value="12" icon={<Activity size={24} className="text-blue-500" />} color="bg-blue-50" />
            <StatCard title="Urgences résolues (24h)" value="45" icon={<CheckCircle size={24} className="text-green-500" />} color="bg-green-50" />
          </div>

          {/* Live Alerts Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                <span className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
                Flux des urgences en direct
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-500 text-sm">
                    <th className="px-6 py-4 font-medium">ID</th>
                    <th className="px-6 py-4 font-medium">Date & Heure</th>
                    <th className="px-6 py-4 font-medium">Patient</th>
                    <th className="px-6 py-4 font-medium">Type</th>
                    <th className="px-6 py-4 font-medium">Position</th>
                    <th className="px-6 py-4 font-medium">Statut</th>
                    <th className="px-6 py-4 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {alerts.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                        Aucune urgence en cours. Le système est au calme.
                      </td>
                    </tr>
                  ) : (
                    alerts.map((alert) => (
                      <tr key={alert.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">#{alert.id.substring(0, 8)}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{new Date(alert.createdAt).toLocaleString('fr-FR')}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{alert.patientId.substring(0, 8)}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            {alert.typeUrgence}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {alert.latitude.toFixed(4)}, {alert.longitude.toFixed(4)}
                        </td>
                        <td className="px-6 py-4">
                          <StatusBadge status={alert.statut} />
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-red-600 hover:text-red-900 text-sm font-medium">
                            Gérer
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active = false, isOpen }: { icon: React.ReactNode, label: string, active?: boolean, isOpen: boolean }) {
  return (
    <a href="#" className={`flex items-center px-4 py-3 rounded-xl transition-colors ${active ? 'bg-white/10 text-white' : 'text-red-100 hover:bg-white/5'}`}>
      <div className="flex-shrink-0">{icon}</div>
      {isOpen && <span className="ml-3 font-medium">{label}</span>}
    </a>
  );
}

function StatCard({ title, value, icon, color }: { title: string, value: string | number, icon: React.ReactNode, color: string }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center space-x-4">
      <div className={`p-4 rounded-full ${color}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case 'EN_ATTENTE':
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">En attente</span>;
    case 'EN_COURS':
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Ambulance en route</span>;
    case 'RESOLU':
    case 'TERMINE':
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Terminé</span>;
    case 'ANNULE':
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Annulé</span>;
    default:
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">{status}</span>;
  }
}
