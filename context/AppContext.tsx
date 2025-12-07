
import React, { createContext, useContext, useEffect } from 'react';
import { usePersistedState } from '../hooks/usePersistedState';
import { PaperType } from '../types';

interface AppContextType {
  bookmarks: string[];
  wrongAnswers: string[];
  theme: 'light' | 'dark';
  currentPaper: PaperType;
  currentPaperSet: 'A' | 'B';
  toggleBookmark: (id: string) => void;
  markWrong: (id: string) => void;
  removeWrong: (id: string) => void;
  toggleTheme: () => void;
  resetProgress: () => void;
  setPaper: (paper: PaperType) => void;
  setPaperSet: (set: 'A' | 'B') => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookmarks, setBookmarks] = usePersistedState<string[]>('app_bookmarks', []);
  const [wrongAnswers, setWrongAnswers] = usePersistedState<string[]>('app_wrong', []);
  const [theme, setTheme] = usePersistedState<'light' | 'dark'>('app_theme', 'light');
  const [currentPaper, setPaper] = usePersistedState<PaperType>('app_paper_v3', 'digital_bank');
  const [currentPaperSet, setPaperSet] = usePersistedState<'A' | 'B'>('app_paper_set', 'A');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleBookmark = (id: string) => {
    setBookmarks(prev => 
      prev.includes(id) ? prev.filter(bid => bid !== id) : [...prev, id]
    );
  };

  const markWrong = (id: string) => {
    if (!wrongAnswers.includes(id)) {
      setWrongAnswers(prev => [...prev, id]);
    }
  };

  const removeWrong = (id: string) => {
    setWrongAnswers(prev => prev.filter(wid => wid !== id));
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const resetProgress = () => {
    setBookmarks([]);
    setWrongAnswers([]);
  };

  return (
    <AppContext.Provider value={{ 
      bookmarks, wrongAnswers, theme, currentPaper, currentPaperSet,
      toggleBookmark, markWrong, removeWrong, toggleTheme, resetProgress, setPaper, setPaperSet 
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
