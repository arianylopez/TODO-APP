import { motion } from 'framer-motion';
import { FilterType } from '@/types/todo';
import { cn } from '@/lib/utils';

interface TodoFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  stats: {
    total: number;
    completed: number;
    pending: number;
  };
}

const filters: { value: FilterType; label: string; countKey: keyof TodoFilterProps['stats'] }[] = [
  { value: 'all', label: 'Todas', countKey: 'total' },
  { value: 'pending', label: 'Pendientes', countKey: 'pending' },
  { value: 'completed', label: 'Completadas', countKey: 'completed' },
];

export const TodoFilter = ({ filter, onFilterChange, stats }: TodoFilterProps) => {
  return (
    <motion.div
      className="flex gap-2 p-1.5 bg-muted rounded-xl"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => onFilterChange(f.value)}
          className={cn(
            "flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-200",
            filter === f.value
              ? "bg-card text-foreground shadow-soft"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {f.label}
          <span
            className={cn(
              "ml-2 px-2 py-0.5 rounded-full text-xs",
              filter === f.value
                ? "bg-primary/10 text-primary"
                : "bg-muted-foreground/10 text-muted-foreground"
            )}
          >
            {stats[f.countKey]}
          </span>
        </button>
      ))}
    </motion.div>
  );
};
