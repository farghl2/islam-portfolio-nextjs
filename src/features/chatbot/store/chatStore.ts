import { create } from 'zustand';
import type { ChatState, ChatMessage } from '../types/chat.types';

const generateId = () => `msg_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;

const welcomeMessage: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  content:
    "Hi, I am Islam's portfolio assistant. Ask me about services, projects, tech stack, or how to start your project.",
  timestamp: new Date(),
};

export const useChatStore = create<ChatState>((set) => ({
  isOpen: false,
  messages: [welcomeMessage],
  isLoading: false,

  openChat: () => set({ isOpen: true }),
  closeChat: () => set({ isOpen: false }),
  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),

  addMessage: (message: ChatMessage) =>
    set((state) => ({
      messages: [...state.messages, { ...message, id: message.id || generateId() }],
    })),

  setLoading: (loading: boolean) => set({ isLoading: loading }),
  clearMessages: () => set({ messages: [welcomeMessage] }),
}));
