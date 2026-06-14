"use client";

import { motion } from 'motion/react';
import { Bot, User } from 'lucide-react';
import type { ChatMessage as ChatMessageType } from '../types/chat.types';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={cn('flex gap-2 px-3', isUser ? 'flex-row-reverse' : 'flex-row')}
    >
      <div
        className={cn(
          'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border',
          isUser
            ? 'border-secondary/40 bg-secondary/15 text-secondary'
            : 'border-primary/30 bg-primary/10 text-primary'
        )}
      >
        {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>

      <div
        className={cn(
          'max-w-[82%] rounded-2xl px-3 py-2.5 text-sm leading-relaxed',
          isUser
            ? 'rounded-tr-none bg-primary text-primary-foreground'
            : 'rounded-tl-none border border-primary/20 bg-card text-card-foreground'
        )}
      >
        <p className="whitespace-pre-wrap">{message.content}</p>
        <p className={cn('mt-1 text-[10px]', isUser ? 'text-primary-foreground/75' : 'text-muted-foreground')}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </motion.div>
  );
}

export function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      className="flex gap-2 px-3"
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
        <Bot className="h-4 w-4" />
      </div>

      <div className="flex items-center gap-1 rounded-2xl rounded-tl-none border border-primary/20 bg-card px-3 py-2.5">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-primary"
            animate={{ scale: [1, 1.25, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </motion.div>
  );
}
