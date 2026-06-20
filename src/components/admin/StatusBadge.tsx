interface StatusBadgeProps {
  status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  let bg = "bg-slate-100";
  let text = "text-slate-600";

  switch (status.toLowerCase()) {
    case 'vérifié':
    case 'terminé':
    case 'actif':
      bg = "bg-emerald-50";
      text = "text-emerald-600";
      break;
    case 'en attente':
    case 'nouveau':
    case 'en cours':
      bg = "bg-amber-50";
      text = "text-amber-600";
      break;
    case 'rejeté':
    case 'suspendu':
      bg = "bg-rose-50";
      text = "text-rose-600";
      break;
    case 'ambulance affectée':
      bg = "bg-blue-50";
      text = "text-blue-600";
      break;
  }

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${bg} ${text}`}>
      {status}
    </span>
  );
}
