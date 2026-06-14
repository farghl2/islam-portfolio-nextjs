"use client";

import { X, Trash2 } from 'lucide-react';
import { useChatStore } from '../store/chatStore';

export default function ChatHeader() {
  const { closeChat, clearMessages } = useChatStore();

  return (
    <div className="flex items-center justify-between border-b border-primary/20 bg-background/90 px-4 py-3 backdrop-blur-md">
      <div>
        <h2 className="text-base font-bold text-foreground">Project Assistant</h2>
        <p className="text-xs text-muted-foreground">Online now</p>
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={clearMessages}
          className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
          aria-label="Clear chat"
          title="Clear conversation"
        >
          <Trash2 className="h-4 w-4" />
        </button>
        <button
          onClick={closeChat}
          className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
          aria-label="Close chat"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
