"use client";

import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

export default function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const submit = () => {
    const value = message.trim();
    if (!value) {
      setError('Please enter a message');
      return;
    }
    if (value.length > 1000) {
      setError('Message is too long');
      return;
    }
    setError('');
    onSend(value);
    setMessage('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!isLoading) submit();
    }
  };

  return (
    <div className="border-t border-primary/20 bg-background/90 p-3 backdrop-blur-md">
      {error && <p className="mb-2 px-1 text-xs text-red-500">{error}</p>}

      <div className="flex items-end gap-2">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about projects, stack, or delivery..."
          disabled={isLoading}
          rows={1}
          className="min-h-[42px] max-h-[120px] w-full resize-none rounded-xl border border-primary/20 bg-card px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary disabled:cursor-not-allowed disabled:opacity-60"
        />

        <button
          type="button"
          onClick={submit}
          disabled={isLoading}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}
