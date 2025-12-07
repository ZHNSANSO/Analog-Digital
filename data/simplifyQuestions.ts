
import { Question, QuestionType } from '../types';

const QUESTIONS_BASE = [
  { id: 'simp_1', number: 1, type: QuestionType.SIMPLIFICATION, content: '用卡诺图化简函数为最简单的与或式（画图）：<br/>\\Y = \\sum m(0,2,8,10)' },
  { id: 'simp_2', number: 2, type: QuestionType.SIMPLIFICATION, content: 'Y(A, B, C, D) = \\sum m(2, 6, 7, 8, 9, 10, 11, 13, 14, 15)' },
  { id: 'simp_3', number: 3, type: QuestionType.SIMPLIFICATION, content: '对 Z 函数要求：(1) 列出真值表；(2) 用卡诺图化简；(3) 画出化简后的逻辑图。<br/> Z = \\overline{AB} + \\overline{A}\\overline{B}C + \\overline{A}B\\overline{C} <br/> 约束条件 BC=0' },
];

const ANSWERS: Record<string, string> = {
  'simp_1': '\\Y = \\overline{B}\\overline{D}',
  'simp_2': '\\Y = AD + BC + C\\overline{D} + A\\overline{B}',
  'simp_3': 'Z = A \\oplus B + C',
};

const EXPLANATIONS: Record<string, string> = {
  'simp_1': '1. **填图**：m0(0000), m2(0010), m8(1000), m10(1010) 为 1。<br/>2. **圈组**：这四个角构成一个 4-格圈。<br/>3. **消元**：A 变(0,1)消去，C 变(0,1)消去，B=0 不变，D=0 不变。<br/>4. **结果**：\\overline{B}\\overline{D}。',
  'simp_2': '1. **填图**：2,6,7,8,9,10,11,13,14,15 填 1。<br/>2. **圈组**：<br/>   - (m8,m9,m10,m11,m13,m15) 结合... 需细致画图。参考标准答案：\\AD+BC+C\\overline{D}+A\\overline{B}。',
  'simp_3': '1. **处理约束**：BC=0，说明 BC=1 的情况 (011, 111) 是无关项 X。<br/>2. **表达式展开**：\\Z = \\overline{A} + \\overline{B} + \\overline{A}\\overline{B}C + \\overline{A}B\\overline{C}。结合约束化简。<br/>3. **结果**：化简为 \\Z = A\\overline{B} + \\overline{A}B + C = (A \\oplus B) + C。',
};

export const SIMPLIFY_QUESTIONS: Question[] = QUESTIONS_BASE.map(q => ({
  ...q,
  answer: ANSWERS[q.id] || '',
  explanation: EXPLANATIONS[q.id] || '暂无解析'
}));
