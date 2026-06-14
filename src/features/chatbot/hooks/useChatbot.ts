"use client";

import { useState } from 'react';
import { useChatStore } from '../store/chatStore';
import { sendChatMessage } from '../services/chatService';
import type { ChatMessage } from '../types/chat.types';

/**
 * Custom hook for chatbot functionality
 * Uses React Query for managing the chat mutation and Zustand for state
 */
export function useChatbot() {
  const { messages, isLoading, addMessage, setLoading, clearMessages } = useChatStore();
  const [isError, setIsError] = useState(false);

  // Send a message
  const sendMessage = async (content: string) => {
    if (isLoading) return;
    setIsError(false);

    // Add user message to store
    const userMessage: ChatMessage = {
      id: `user_${Date.now()}`,
      role: 'user',
      content,
      timestamp: new Date(),
    };
    addMessage(userMessage);

    setLoading(true);
    try {
      const response = await sendChatMessage({
        message: content,
        conversationHistory: [...messages, userMessage],
      });

      const assistantMessage: ChatMessage = {
        id: `assistant_${Date.now()}`,
        role: 'assistant',
        content: response.message,
        timestamp: new Date(),
      };
      addMessage(assistantMessage);
    } catch (error) {
      console.error('Chat send error:', error);
      setIsError(true);
      const errorMessage: ChatMessage = {
        id: `error_${Date.now()}`,
        role: 'assistant',
        content: "I hit an issue while responding. Please try again, or contact me on WhatsApp.",
        timestamp: new Date(),
      };
      addMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    isLoading,
    sendMessage,
    clearMessages,
    isError,
  };
}
