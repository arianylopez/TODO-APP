import { motion } from 'framer-motion';
import { CheckCircle2, Circle, ListTodo } from 'lucide-react';

interface TodoStatsProps {
  stats: {
    total: number;
    completed: number;
    pending: number;
  };
}

export const TodoStats = ({ stats }: TodoStatsProps) => {
  const progress = stats.total > 0 ? (stats.completed / stats.total) * 100 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="bg-card rounded-2xl p-6 shadow-card border border-border/50"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-lg font-semibold text-foreground">Tu progreso</h2>
        <span className="text-2xl font-bold text-primary">{Math.round(progress)}%</span>
      </div>

      <div className="h-3 bg-muted rounded-full overflow-hidden mb-6">
        <motion.div
          className="h-full gradient-success rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-3 rounded-xl bg-muted/50">
          <ListTodo className="w-5 h-5 mx-auto mb-1 text-primary" />
          <p className="text-2xl font-bold text-foreground">{stats.total}</p>
          <p className="text-xs text-muted-foreground">Total</p>
        </div>
        <div className="text-center p-3 rounded-xl bg-muted/50">
          <Circle className="w-5 h-5 mx-auto mb-1 text-primary" />
          <p className="text-2xl font-bold text-foreground">{stats.pending}</p>
          <p className="text-xs text-muted-foreground">Pendientes</p>
        </div>
        <div className="text-center p-3 rounded-xl bg-muted/50">
          <CheckCircle2 className="w-5 h-5 mx-auto mb-1 text-accent" />
          <p className="text-2xl font-bold text-foreground">{stats.completed}</p>
          <p className="text-xs text-muted-foreground">Completadas</p>
        </div>
      </div>
    </motion.div>
  );
};
