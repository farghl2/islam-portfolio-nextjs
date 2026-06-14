"use client";

import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useChatStore } from '../store/chatStore';
import { useChatbot } from '../hooks/useChatbot';
import ChatHeader from './ChatHeader';
import ChatMessage, { TypingIndicator } from './ChatMessage';
import ChatInput from './ChatInput';

export default function ChatSheet() {
  const { isOpen, closeChat } = useChatStore();
  const { messages, isLoading, sendMessage } = useChatbot();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeChat}
            className="fixed inset-0 z-50 bg-black/45 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed right-0 top-0 bottom-0 z-50 flex w-full max-w-md flex-col overflow-hidden border-l border-primary/20 bg-background shadow-2xl"
          >
            <ChatHeader />

            <div className="flex-1 space-y-4 overflow-y-auto py-3 pb-5">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              <AnimatePresence>{isLoading && <TypingIndicator />}</AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            <ChatInput onSend={sendMessage} isLoading={isLoading} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
