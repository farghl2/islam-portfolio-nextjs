"use client";

import { motion } from 'motion/react';
import { Bot, Sparkles } from 'lucide-react';
import { useChatStore } from '../store/chatStore';

export default function ChatButton() {
  const { isOpen, toggleChat } = useChatStore();

  if (isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', damping: 16, stiffness: 240 }}
      className="fixed bottom-0 right-6 z-[20]"
    >
      <motion.button
        onClick={toggleChat}
        aria-label="Open project assistant"
        whileHover={{ y: -2, scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="group relative flex items-center gap-2 rounded-full border border-primary/30 bg-gradient-to-r from-primary to-secondary px-4 py-3 text-sm font-bold text-white shadow-[0_12px_35px_rgba(0,0,0,0.35)]"
      >
        <motion.span
          className="absolute -inset-1 -z-10 rounded-full bg-primary/35 blur-md"
          animate={{ opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
          <Bot className="h-4 w-4" />
        </span>
        AI Chatbot
        <Sparkles className="h-4 w-4" />
      </motion.button>
    </motion.div>
  );
}
