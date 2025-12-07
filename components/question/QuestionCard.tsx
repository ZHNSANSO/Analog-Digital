
import React, { useState } from 'react';
import { Question, QuestionType } from '../../types';
import { useApp } from '../../context/AppContext';
import { Bookmark, Star, AlertCircle, CheckCircle, XCircle, Eye, EyeOff } from 'lucide-react';
import { MathText } from './MathText';

interface QuestionCardProps {
  question: Question;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  const { bookmarks, wrongAnswers, toggleBookmark, markWrong, removeWrong } = useApp();
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isBookmarked = bookmarks.includes(question.id);
  const isWrong = wrongAnswers.includes(question.id);

  const handleSubmit = (inputAnswer?: string) => {
    setIsSubmitted(true);
    setShowAnswer(true);
    
    const finalAnswer = inputAnswer !== undefined ? inputAnswer : userAnswer;
    
    let isCorrect = false;
    
    if (question.type === QuestionType.SINGLE_CHOICE || question.type === QuestionType.JUDGMENT) {
       isCorrect = finalAnswer.trim().toUpperCase() === (question.answer as string).trim().toUpperCase();
    } else {
        return; 
    }

    if (!isCorrect) {
        markWrong(question.id);
    }
  };

  const handleOptionClick = (val: string) => {
      if (isSubmitted) return;
      setUserAnswer(val);
      handleSubmit(val);
  };

  const handleManualWrongToggle = () => {
      if (isWrong) removeWrong(question.id);
      else markWrong(question.id);
  };

  const renderInput = () => {
    switch (question.type) {
      case QuestionType.SINGLE_CHOICE:
        return (
          <div className="flex flex-col gap-2 mt-4">
            {question.options?.map((opt, idx) => {
                const optKey = String.fromCharCode(65 + idx); // A, B, C...
                const isActive = userAnswer === optKey;
                const isCorrect = (question.answer as string) === optKey;
                
                let itemStyle = 'bg-white border-gray-200 hover:bg-gray-50 dark:bg-cardbg dark:border-gray-700 dark:hover:bg-gray-800';
                if (isSubmitted) {
                    if (isCorrect) itemStyle = 'bg-green-100 border-green-500 text-green-900 dark:bg-green-900/40 dark:border-green-400 dark:text-green-100';
                    else if (isActive && !isCorrect) itemStyle = 'bg-red-100 border-red-500 text-red-900 dark:bg-red-900/40 dark:border-red-400 dark:text-red-100';
                }

                return (
                    <button
                        key={idx}
                        onClick={() => handleOptionClick(optKey)}
                        disabled={isSubmitted}
                        className={`text-left p-3 rounded-lg border transition-all ${itemStyle}`}
                    >
                        <MathText content={opt} />
                    </button>
                );
            })}
          </div>
        );
      case QuestionType.JUDGMENT:
        return (
            <div className="flex gap-4 mt-4">
                {['正确', '错误'].map((opt) => {
                    const isCorrect = question.answer === opt;
                    const isActive = userAnswer === opt;
                    
                    let btnStyle = 'bg-transparent border-gray-300 text-gray-600 dark:text-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800';
                    if (isSubmitted) {
                         if (isCorrect) btnStyle = 'bg-green-600 text-white border-green-600';
                         else if (isActive) btnStyle = 'bg-red-600 text-white border-red-600';
                    }

                    return (
                        <button
                            key={opt}
                            onClick={() => handleOptionClick(opt)}
                            disabled={isSubmitted}
                            className={`px-6 py-2 rounded-full border transition-all ${btnStyle}`}
                        >
                            {opt}
                        </button>
                    )
                })}
            </div>
        );
      default:
        // Fill blank, Analysis, Simplification, Design
        return (
            <div className="mt-4">
                 <textarea
                    placeholder="在此输入您的思考或答案..."
                    className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
                    rows={4}
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                />
            </div>
        );
    }
  };

  return (
    <div className="bg-white dark:bg-cardbg rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 mb-6 transition-all duration-300 hover:shadow-md">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-wrap gap-2 items-center">
            <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-200 text-xs px-2.5 py-1 rounded-md font-bold">
                {question.type}
            </span>
            <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs px-2.5 py-1 rounded-md font-mono font-bold">
                第 {question.number} 题
            </span>
            {isWrong && (
                <span className="flex items-center gap-1 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-200 text-xs px-2.5 py-1 rounded-md font-medium">
                    <AlertCircle size={12} /> 错题
                </span>
            )}
        </div>
        <div className="flex gap-2 shrink-0">
            <button 
                onClick={() => toggleBookmark(question.id)}
                className={`p-2 rounded-full transition-colors ${
                    isBookmarked ? 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20' : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                title="收藏"
            >
                {isBookmarked ? <Star size={18} fill="currentColor" /> : <Bookmark size={18} />}
            </button>
            <button
                onClick={handleManualWrongToggle}
                 className={`p-2 rounded-full transition-colors ${
                    isWrong ? 'text-red-500 bg-red-50 dark:bg-red-900/20' : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                title="标记为错题"
            >
                <XCircle size={18} />
            </button>
        </div>
      </div>

      {/* Content */}
      <div className="prose dark:prose-invert max-w-none mb-6">
        <div className="text-lg font-medium text-slate-800 dark:text-slate-100 leading-relaxed">
            <MathText content={question.content} />
        </div>
        {question.imageUrl && (
            <div className="mt-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-dashed border-gray-300 dark:border-gray-700 text-center">
                 <p className="text-gray-500 text-sm italic mb-2">
                    注：本题包含电路图/波形图/逻辑图
                </p>
                <p className="text-xs text-gray-400">
                    （请结合题目文字描述与下方详细解析进行复习）
                </p>
            </div>
        )}
      </div>

      {renderInput()}

      {/* Actions */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
        <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
        >
            {showAnswer ? <EyeOff size={16} /> : <Eye size={16} />}
            {showAnswer ? '隐藏答案' : '查看答案'}
        </button>

        {!isSubmitted && (question.type !== QuestionType.SINGLE_CHOICE && question.type !== QuestionType.JUDGMENT) && (
             <button
                onClick={() => handleSubmit()}
                className="bg-primary hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
             >
                显示答案
             </button>
        )}
      </div>

      {/* Answer & Explanation */}
      {showAnswer && (
        <div className="mt-6 p-5 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/30 rounded-xl animate-fadeIn">
            <div className="flex items-start gap-4">
                <CheckCircle className="text-green-600 dark:text-green-400 mt-1 shrink-0" size={24} />
                <div className="flex-1 w-full overflow-hidden">
                    <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">参考答案</h4>
                    <div className="text-green-900 dark:text-green-100 font-mono text-lg font-semibold mb-4 bg-white/50 dark:bg-black/20 p-2 rounded inline-block">
                        <MathText content={Array.isArray(question.answer) ? question.answer.join('，') : question.answer} />
                    </div>
                    
                    {question.explanation && (
                        <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-white dark:bg-cardbg p-4 rounded-lg border border-green-200 dark:border-green-800/50 shadow-sm">
                            <span className="block font-bold mb-3 text-green-800 dark:text-green-400 border-b border-green-100 dark:border-green-800 pb-2">
                                深度解析
                            </span>
                            <div className="space-y-2">
                                <MathText content={question.explanation} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
      )}
    </div>
  );
};
