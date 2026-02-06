import { motion } from 'framer-motion';
import { TodoInput } from '@/components/todo/TodoInput';
import { TodoFilter } from '@/components/todo/TodoFilter';
import { TodoList } from '@/components/todo/TodoList';
import { TodoStats } from '@/components/todo/TodoStats';
import { useTodos } from '@/hooks/useTodos';
import { Sparkles } from 'lucide-react';

const Index = () => {
  const { todos, filter, setFilter, addTodo, toggleTodo, deleteTodo, stats } = useTodos();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 container max-w-2xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.header
          className="text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Organiza tu día
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
            Lista de Tareas
          </h1>
          <p className="text-muted-foreground text-lg">
            Mantén tu productividad al máximo
          </p>
        </motion.header>

        {/* Stats */}
        <div className="mb-8">
          <TodoStats stats={stats} />
        </div>

        {/* Input */}
        <div className="mb-6">
          <TodoInput onAdd={addTodo} />
        </div>

        {/* Filter */}
        <div className="mb-6">
          <TodoFilter filter={filter} onFilterChange={setFilter} stats={stats} />
        </div>

        {/* Task List */}
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />

        {/* Footer */}
        <motion.footer
          className="text-center mt-12 text-muted-foreground text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Hecho con ❤️ para ti
        </motion.footer>
      </div>
    </div>
  );
};

export default Index;
