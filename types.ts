
export enum QuestionType {
  FILL_BLANK = '一、填空题',
  SINGLE_CHOICE = '二、单项选择题',
  JUDGMENT = '三、判断题',
  // Digital specific
  SIMPLIFICATION = '四、函数化简题',
  DIGITAL_ANALYSIS = '五、分析题',
  DESIGN = '六、设计应用题',
  // Analog specific
  ANALOG_ANALYSIS = '四、分析题',
  CALCULATION = '五、计算题',
}

export type PaperType = 'digital' | 'analog';

export interface Question {
  id: string;
  type: QuestionType;
  number: number;
  content: string;
  options?: string[];
  answer: string | string[];
  explanation?: string;
  imageUrl?: string;
  paper?: PaperType;
}

export type AppView = 'all' | 'bookmarks' | 'wrong' | QuestionType;

export interface AppState {
  bookmarks: string[];
  wrongAnswers: string[];
  theme: 'light' | 'dark';
  currentPaper: PaperType;
}
