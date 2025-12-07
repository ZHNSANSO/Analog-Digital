
import { Question, QuestionType } from '../types';

const QUESTIONS_BASE = [
  { id: 'ana_1', number: 1, type: QuestionType.DIGITAL_ANALYSIS, content: '74LS161 是同步 4 位二进制加法计数器，其逻辑功能表如下，试分析下列电路是几进制计数器，并画出其状态图。（8分）<br/>（电路描述：反馈信号取自 Q3, Q1 接与非门至 CR）' },
  { id: 'ana_2', number: 2, type: QuestionType.DIGITAL_ANALYSIS, content: '触发器电路如图所示，试根据 CP 及输入波形画出输出端 Q₁、Q₂ 的波形。设各触发器的初始状态均为“0”。（6分）' },
  { id: 'ana_3', number: 3, type: QuestionType.DIGITAL_ANALYSIS, content: '分析图所示组合逻辑电路的功能。<br/>（图示为三个与非门构成的表决电路结构）' },
  { id: 'ana_4', number: 4, type: QuestionType.DIGITAL_ANALYSIS, content: '分析图所示的时序电路的逻辑功能，写出电路的驱动方程、状态方程和输出方程，画出电路的状态转换图，并说明该电路是否能自启动。（15分）<br/>（图示为三个D触发器构成的电路）' }
];

const ANSWERS: Record<string, string> = {
  'ana_1': '十进制计数器',
  'ana_2': '见解析',
  'ana_3': '三位多数表决电路',
  'ana_4': '五进制计数器，能自启动',
};

const EXPLANATIONS: Record<string, string> = {
  'ana_1': '1. **反馈清零**：与非门输入来自 Q3(8) 和 Q1(2)。<br/>2. **模值**：当输出达到 1010 (8+2=10) 时，与非门输出低电平，CR 有效，计数器清零。<br/>3. **结论**：有效状态 0~9，为十进制计数器。',
  'ana_3': '逻辑表达式：\\Y = AB + BC + CA。<br/>功能：当 A,B,C 中有两个或以上为 1 时，输出 Y=1。',
  'ana_4': '1. **驱动方程**：\\D_1 = \\overline{Q_3}, D_2 = Q_1, D_3 = Q_1 Q_2。<br/>2. **状态转移**：<br/>   000 -> 100 -> 110 -> 111 -> 011 -> 000 (此为示例，需根据具体图解)。<br/>   根据原图答案：状态图包含 5 个有效状态。',
};

export const ANALYSIS_QUESTIONS: Question[] = QUESTIONS_BASE.map(q => ({
  ...q,
  answer: ANSWERS[q.id] || '',
  explanation: EXPLANATIONS[q.id] || '暂无解析'
}));
