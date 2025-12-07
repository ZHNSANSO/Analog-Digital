
import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { AppView, QuestionType, PaperType } from '../../types';
import { 
  BookOpen, Bookmark, XCircle, Moon, Sun, 
  ChevronLeft, ChevronRight, ListChecks, 
  PenTool, BrainCircuit, Calculator, Eraser,
  Layers
} from 'lucide-react';

interface SidebarProps {
  currentView: AppView;
  onChangeView: (view: AppView) => void;
  stats: { total: number; wrong: number; bookmarks: number };
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onChangeView, stats }) => {
  const { theme, toggleTheme, resetProgress, currentPaper, setPaper } = useApp();
  const [collapsed, setCollapsed] = useState(false);

  const mainItems = [
    { id: 'all', label: '全部题目', icon: BookOpen, count: stats.total },
    { id: 'bookmarks', label: '我的收藏', icon: Bookmark, count: stats.bookmarks },
    { id: 'wrong', label: '错题集', icon: XCircle, count: stats.wrong },
  ];

  // Define menus based on paper
  const digitalMenu = [
    { id: QuestionType.FILL_BLANK, label: '一、填空题', icon: PenTool },
    { id: QuestionType.SINGLE_CHOICE, label: '二、选择题', icon: ListChecks },
    { id: QuestionType.JUDGMENT, label: '三、判断题', icon: BrainCircuit },
    { id: QuestionType.SIMPLIFICATION, label: '四、化简题', icon: Calculator },
    { id: QuestionType.DIGITAL_ANALYSIS, label: '五、分析题', icon: BrainCircuit },
    { id: QuestionType.DESIGN, label: '六、设计题', icon: PenTool },
  ];

  const analogMenu = [
    { id: QuestionType.FILL_BLANK, label: '一、填空题', icon: PenTool },
    { id: QuestionType.SINGLE_CHOICE, label: '二、选择题', icon: ListChecks },
    { id: QuestionType.JUDGMENT, label: '三、判断题', icon: BrainCircuit },
    { id: QuestionType.ANALOG_ANALYSIS, label: '四、分析题', icon: BrainCircuit },
    { id: QuestionType.CALCULATION, label: '五、计算题', icon: Calculator },
  ];

  const typeItems = currentPaper === 'digital' ? digitalMenu : analogMenu;

  const handleReset = () => {
    if (window.confirm('确定要重置所有学习进度吗？这将清空您的收藏和错题记录，且无法恢复。')) {
      resetProgress();
    }
  };

  return (
    <div 
      className={`${collapsed ? 'w-20' : 'w-full md:w-64'} bg-white dark:bg-cardbg border-r border-gray-200 dark:border-gray-800 flex flex-col h-full sticky top-0 transition-all duration-300 ease-in-out font-sans`}
    >
      <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex flex-col gap-3 shrink-0">
        <div className="flex items-center justify-between">
            {!collapsed && (
            <h1 className="text-xl font-bold text-gray-800 dark:text-white tracking-tight whitespace-nowrap overflow-hidden">
                专业理论强化训练
            </h1>
            )}
            {collapsed && (
            <span className="text-lg font-bold text-primary mx-auto">训练</span>
            )}
            <button 
                onClick={() => setCollapsed(!collapsed)}
                className="hidden md:flex p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-600 transition-colors"
            >
                {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>
        </div>

        {/* Paper Switcher */}
        {!collapsed ? (
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-1 flex">
                <button
                    onClick={() => setPaper('digital')}
                    className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all ${
                        currentPaper === 'digital' 
                        ? 'bg-white dark:bg-cardbg shadow text-primary' 
                        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
                    }`}
                >
                    数字电子
                </button>
                <button
                    onClick={() => setPaper('analog')}
                    className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all ${
                        currentPaper === 'analog' 
                        ? 'bg-white dark:bg-cardbg shadow text-primary' 
                        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
                    }`}
                >
                    模拟电子
                </button>
            </div>
        ) : (
             <button
                onClick={() => setPaper(currentPaper === 'digital' ? 'analog' : 'digital')}
                className="mx-auto bg-primary/10 text-primary p-2 rounded-lg"
                title="切换试卷"
             >
                 <Layers size={18} />
             </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-2 space-y-6">
        {/* Main Navigation */}
        <nav className="space-y-1">
          {mainItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onChangeView(item.id as AppView)}
              className={`w-full flex items-center ${collapsed ? 'justify-center px-0' : 'justify-between px-3'} py-2.5 rounded-lg transition-all ${
                currentView === item.id
                  ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-300 font-medium'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
              title={collapsed ? item.label : ''}
            >
              <div className={`flex items-center ${collapsed ? 'gap-0' : 'gap-3'}`}>
                <item.icon size={18} className="shrink-0" />
                {!collapsed && <span className="text-sm">{item.label}</span>}
              </div>
              {!collapsed && item.count > 0 && (
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                    currentView === item.id 
                      ? 'bg-primary/20 text-primary dark:bg-primary/30 dark:text-blue-200'
                      : 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
                }`}>
                  {item.count}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Categories */}
        <nav className="space-y-1">
           {!collapsed && <div className="px-3 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">题型分类</div>}
           {collapsed && <div className="h-px bg-gray-100 dark:bg-gray-800 my-2 mx-2"></div>}
           
           {typeItems.map((item) => (
             <button
               key={item.id}
               onClick={() => onChangeView(item.id as AppView)}
               className={`w-full flex items-center ${collapsed ? 'justify-center px-0' : 'gap-3 px-3'} py-2 rounded-lg transition-all ${
                 currentView === item.id
                   ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 font-medium'
                   : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
               }`}
               title={collapsed ? item.label : ''}
             >
               <item.icon size={18} className="shrink-0" />
               {!collapsed && <span className="text-sm truncate">{item.label}</span>}
             </button>
           ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-2 shrink-0">
        <button 
            onClick={toggleTheme}
            className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'} p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors w-full`}
        >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            {!collapsed && <span className="text-sm">
                {theme === 'light' ? '夜间模式' : '日间模式'}
            </span>}
        </button>

        <button 
            onClick={handleReset}
            className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'} p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500 dark:text-red-400 transition-colors w-full`}
        >
            <Eraser size={18} />
            {!collapsed && <span className="text-sm">重置进度</span>}
        </button>
      </div>
    </div>
  );
};
