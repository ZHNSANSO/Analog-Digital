
export enum QuestionType {
  FILL_BLANK = '一、填空题',
  SINGLE_CHOICE = '二、单项选择题',
  JUDGMENT = '三、判断题',
  // Digital specific
  SIMPLIFICATION = '三、化简题', 
  DRAWING = '四、画图题',
  DIGITAL_ANALYSIS = '五、分析题',
  DESIGN = '六、设计应用题',
  COMPREHENSIVE = '七、综合题',
  // Analog specific
  ANALOG_ANALYSIS = '四、分析题',
  CALCULATION = '五、计算题',
}

export type PaperType = 'digital_bank' | 'analog_bank' | 'digital_paper';

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
  paperSet?: 'A' | 'B'; // A卷 或 B卷
}

export type AppView = 'all' | 'bookmarks' | 'wrong' | QuestionType;

export interface AppState {
  bookmarks: string[];
  wrongAnswers: string[];
  theme: 'light' | 'dark';
  currentPaper: PaperType;
  currentPaperSet: 'A' | 'B';
}
