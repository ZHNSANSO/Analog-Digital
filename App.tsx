
import React, { useState, useMemo } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Sidebar } from './components/layout/Sidebar';
import { QuestionCard } from './components/question/QuestionCard';
import { QUESTIONS } from './data';
import { AppView, QuestionType } from './types';
import { Search, Menu } from 'lucide-react';

const MainContent: React.FC = () => {
  const [view, setView] = useState<AppView>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { bookmarks, wrongAnswers, currentPaper, currentPaperSet } = useApp();

  const currentPaperLabel = useMemo(() => {
      switch(currentPaper) {
          case 'digital_bank': return '数字电子技术题库';
          case 'analog_bank': return '模拟电子技术题库';
          case 'digital_paper': 
              return `数字电子试卷(${currentPaperSet}卷)`;
          default: return '题库';
      }
  }, [currentPaper, currentPaperSet]);

  const filteredQuestions = useMemo(() => {
    // 1. Filter by Paper ID
    let result = QUESTIONS.filter(q => q.paper === currentPaper);

    // 2. Filter by Paper Set (if applicable)
    if (currentPaper === 'digital_paper') {
        result = result.filter(q => q.paperSet === currentPaperSet);
    }

    // 3. Filter by View
    if (view === 'bookmarks') {
      result = result.filter(q => bookmarks.includes(q.id));
    } else if (view === 'wrong') {
      result = result.filter(q => wrongAnswers.includes(q.id));
    } else if (view !== 'all') {
      result = result.filter(q => q.type === view);
    }

    // 4. Search
    if (searchQuery.trim()) {
      const qLower = searchQuery.toLowerCase();
      result = result.filter(q => 
        q.content.toLowerCase().includes(qLower) || 
        q.number.toString().includes(qLower)
      );
    }

    return result.sort((a, b) => a.number - b.number);
  }, [view, searchQuery, bookmarks, wrongAnswers, currentPaper, currentPaperSet]);

  const stats = {
    total: QUESTIONS.filter(q => q.paper === currentPaper && (currentPaper !== 'digital_paper' || q.paperSet === currentPaperSet)).length,
    bookmarks: bookmarks.filter(id => {
        const q = QUESTIONS.find(q => q.id === id);
        return q?.paper === currentPaper && (currentPaper !== 'digital_paper' || q.paperSet === currentPaperSet);
    }).length,
    wrong: wrongAnswers.filter(id => {
        const q = QUESTIONS.find(q => q.id === id);
        return q?.paper === currentPaper && (currentPaper !== 'digital_paper' || q.paperSet === currentPaperSet);
    }).length
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-darkbg text-slate-900 dark:text-slate-100">
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className={`fixed inset-y-0 left-0 z-50 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <Sidebar 
            currentView={view} 
            onChangeView={(v) => {
                setView(v);
                setIsMobileMenuOpen(false);
            }} 
            stats={stats} 
        />
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white dark:bg-cardbg border-b border-gray-200 dark:border-gray-800 p-4 sticky top-0 z-30 flex items-center gap-4">
            <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 text-gray-600 dark:text-gray-300"
            >
                <Menu />
            </button>
            
            <div className="relative flex-1 max-w-2xl">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                    type="text" 
                    placeholder="搜索题目内容、题号..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 border-transparent focus:bg-white dark:focus:bg-black/20 focus:ring-2 focus:ring-primary outline-none transition-all"
                />
            </div>
            
            <div className="hidden md:block text-sm text-gray-500 font-medium whitespace-nowrap">
                当前: <span className="text-primary font-bold">{currentPaperLabel}</span>
            </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
            <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                        {view === 'all' && '全部题目'}
                        {view === 'bookmarks' && '我的收藏'}
                        {view === 'wrong' && '错题回顾'}
                        {Object.values(QuestionType).includes(view as QuestionType) && view}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        共找到 {filteredQuestions.length} 道题目
                    </p>
                </div>

                {filteredQuestions.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-gray-400 dark:text-gray-600">
                        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                            <Search size={32} />
                        </div>
                        <p>没有找到相关题目</p>
                        {view === 'bookmarks' && <p className="text-sm mt-2">点击题目右上角的书签图标即可收藏</p>}
                    </div>
                ) : (
                    filteredQuestions.map((q) => (
                        <QuestionCard key={q.id} question={q} />
                    ))
                )}
                
                <div className="h-10"></div>
            </div>
        </main>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
};

export default App;
