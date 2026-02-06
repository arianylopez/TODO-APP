import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface TodoInputProps {
  onAdd: (text: string) => void;
}

export const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex gap-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <div className="relative flex-1">
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="¿Qué necesitas hacer hoy?"
          className="h-14 px-5 text-base bg-card border-border shadow-soft rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="h-14 px-6 gradient-warm text-primary-foreground rounded-xl shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105"
        disabled={!text.trim()}
      >
        <Plus className="w-5 h-5 mr-2" />
        Agregar
      </Button>
    </motion.form>
  );
};
