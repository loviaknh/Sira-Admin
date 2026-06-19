import { LucideIcon } from 'lucide-react';
import clsx from 'clsx';

interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  isPositive: boolean;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  chartData?: number[];
  chartColor?: string;
}

export default function StatCard({ 
  title, 
  value, 
  trend, 
  isPositive, 
  icon: Icon,
  iconColor,
  iconBg,
  chartData,
  chartColor
}: StatCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={clsx("w-10 h-10 rounded-full flex items-center justify-center", iconBg)}>
            <Icon size={20} className={iconColor} />
          </div>
          <div>
            <h3 className="text-gray-500 text-xs font-medium">{title}</h3>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-bold text-gray-800">{value}</span>
              <span className={clsx("text-xs font-semibold", isPositive ? "text-green-500" : "text-red-500")}>
                {isPositive ? '+' : '-'}{trend}%
              </span>
            </div>
            <p className="text-[10px] text-gray-400 mt-1">vs mois dernier</p>
          </div>
        </div>
      </div>
      
      {/* Simple SVG Chart Representation */}
      {chartData && chartColor && (
        <div className="h-10 mt-2 w-full flex items-end justify-between gap-1">
          {chartData.map((val, i) => (
            <div 
              key={i} 
              className={clsx("w-full rounded-t-sm opacity-80", chartColor)} 
              style={{ height: `${Math.max(10, (val / Math.max(...chartData)) * 100)}%` }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
