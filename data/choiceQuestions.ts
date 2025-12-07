
import { Question, QuestionType } from '../types';

const QUESTIONS_BASE = [
  { id: 'choice_1', number: 1, type: QuestionType.SINGLE_CHOICE, content: '函数 \\F(A,B,C)=AB+BC+AC 的最小项表达式为( )。', options: ['A. \\sum m(0, 2, 4)', 'B. \\sum m(3, 5, 6, 7)', 'C. \\sum m(0, 2, 3, 4)', 'D. \\sum m(2, 4, 6, 7)'] },
  { id: 'choice_2', number: 2, type: QuestionType.SINGLE_CHOICE, content: '8 线—3 线优先编码器的输入为 \\I_0—I_7，当优先级别最高的 \\I_7 有效时，其输出 \\overline{Y_2}\\overline{Y_1}\\overline{Y_0} 的值是 ( )。', options: ['A. 111', 'B. 010', 'C. 000', 'D. 101'] },
  { id: 'choice_3', number: 3, type: QuestionType.SINGLE_CHOICE, content: '十六路数据选择器的地址输入（选择控制）端有 ( ) 个。', options: ['A. 16', 'B. 2', 'C. 4', 'D. 8'] },
  { id: 'choice_4', number: 4, type: QuestionType.SINGLE_CHOICE, content: '有一个左移移位寄存器，当预先置入 1011 后，其串行输入固定接 0，在 4 个移位脉冲 CP 作用下，四位数据的移位过程是 ( )。', options: ['A. 1011--0110--1100--1000--0000', 'B. 1011--0101--0010--0001--0000', 'C. 1011--1100--1101--1110--1111', 'D. 1011--1010--1001--1000--0111'] },
  { id: 'choice_5', number: 5, type: QuestionType.SINGLE_CHOICE, content: '一只四输入端与非门，使其输出为 1 的输入变量取值组合有 ( ) 种。', options: ['A. 15', 'B. 8', 'C. 7', 'D. 1'] },
  { id: 'choice_6', number: 6, type: QuestionType.SINGLE_CHOICE, content: 'N 个触发器可以构成最大计数长度（进制数）为 ( ) 的计数器。', options: ['A. N', 'B. 2N', 'C. \\N^2', 'D. \\2^N'] },
  { id: 'choice_7', number: 7, type: QuestionType.SINGLE_CHOICE, content: '某计数器的状态转换图如下，其计数的容量为 ( )。 (图示: 000->001->010->011->100->101->110->111->000)', imageUrl: 'placeholder', options: ['A. 八', 'B. 五', 'C. 四', 'D. 三'] },
  { id: 'choice_8', number: 8, type: QuestionType.SINGLE_CHOICE, content: '函数 \\F=AB+BC，使 F=1 的输入 ABC 组合为 ( )', options: ['A. ABC=000', 'B. ABC=010', 'C. ABC=101', 'D. ABC=110'] },
  { id: 'choice_9', number: 9, type: QuestionType.SINGLE_CHOICE, content: '四个触发器组成的环行计数器最多有 ( ) 个有效状态。', options: ['A. 4', 'B. 6', 'C. 8', 'D. 16'] },
  { id: 'choice_10', number: 10, type: QuestionType.SINGLE_CHOICE, content: '若在编码器中有 50 个编码对象，则要求输出二进制代码位数为______位。', options: ['A. 5', 'B. 6', 'C. 10', 'D. 50'] },
  { id: 'choice_11', number: 11, type: QuestionType.SINGLE_CHOICE, content: '在下列逻辑电路中，不是组合逻辑电路的有 ( )。', options: ['A. 译码器', 'B. 编码器', 'C. 全加器', 'D. 寄存器'] },
  { id: 'choice_12', number: 12, type: QuestionType.SINGLE_CHOICE, content: '多谐振荡器可产生 ( )。', options: ['A. 正弦波', 'B. 矩形脉冲', 'C. 三角波', 'D. 锯齿波'] },
  { id: 'choice_13', number: 13, type: QuestionType.SINGLE_CHOICE, content: '一个 4 位移位寄存器可以构成最长计数器的长度是 ( )。', options: ['A. 8', 'B. 12', 'C. 15', 'D. 16'] },
  { id: 'choice_14', number: 14, type: QuestionType.SINGLE_CHOICE, content: '满足特征方程 \\Q^{n+1} = \\overline{Q^n} 的触发器称为 ( )。', options: ['A. D触发器', 'B. JK触发器', 'C. T\'触发器', 'D. RS触发器'] },
  { id: 'choice_15', number: 15, type: QuestionType.SINGLE_CHOICE, content: '下列各式中的四变量 A、B、C、D 的最小项是：( )。', options: ['(A) ABCD', '(B) AB(C+D)', '(C) \\overline{A}+B+C+\\overline{D}', '(D) A+B+C+D'] },
  { id: 'choice_16', number: 16, type: QuestionType.SINGLE_CHOICE, content: '四个逻辑变量的取值组合共有 ( )。', options: ['(A) 8', '(B) 16', '(C) 4', '(D) 15'] },
  { id: 'choice_17', number: 17, type: QuestionType.SINGLE_CHOICE, content: '2048×8 位 RAM 芯片，其数据线的个数是：( )。', options: ['(A) 11', '(B) 8', '(C) 14', '(D) \\2^{11}'] },
  { id: 'choice_18', number: 18, type: QuestionType.SINGLE_CHOICE, content: '8 线—3 线优先编码器的输入为 \\overline{I_0}-\\overline{I_7}，当优先级最高的 \\overline{I_7} 有效时，其输出 \\overline{Y_2}\\overline{Y_1}\\overline{Y_0} 的值是 ( )。', options: ['A. 111', 'B. 010', 'C. 000', 'D. 101'] },
  { id: 'choice_19', number: 19, type: QuestionType.SINGLE_CHOICE, content: 'JK 触发器在 CP 作用下，若状态必须发生翻转，则应使 ( )', options: ['A. J=K=0', 'B. J=K=1', 'C. J=0, K=1'] },
  { id: 'choice_20', number: 20, type: QuestionType.SINGLE_CHOICE, content: 'EPROM 是指 ( )', options: ['A. 随机读写存储器', 'B. 可编程逻辑阵列', 'C. 可编程只读存储器', 'D. 可擦除可编程只读存储器'] },
];

const ANSWERS: Record<string, string> = {
  'choice_1': 'B', 'choice_2': 'C', 'choice_3': 'C', 'choice_4': 'A',
  'choice_5': 'A', 'choice_6': 'D', 'choice_7': 'A', 'choice_8': 'D',
  'choice_9': 'A', 'choice_10': 'B', 'choice_11': 'D', 'choice_12': 'B',
  'choice_13': 'C', 'choice_14': 'C', 'choice_15': 'A', 'choice_16': 'B',
  'choice_17': 'B', 'choice_18': 'C', 'choice_19': 'B', 'choice_20': 'D',
};

const EXPLANATIONS: Record<string, string> = {
  'choice_1': '最小项要求包含所有变量。AB=AB(C+C\')=ABC+ABC\' (m7, m6); BC=... m3,m7; AC=... m5,m7. 合集 m3,m5,m6,m7。',
  'choice_3': '16 路数据需要 \\2^n = 16，故 n=4。',
  'choice_5': '与非门输出为 1，只要输入不全为 1。全 1 的情况只有 1 种。总组合 \\2^4=16。故输出 1 的有 16-1=15 种。',
  'choice_14': 'T\' 触发器功能是翻转，即 \\Q^{n+1} = \\overline{Q^n}。',
  'choice_20': 'Erasable Programmable ROM。',
};

export const CHOICE_QUESTIONS: Question[] = QUESTIONS_BASE.map(q => ({
  ...q,
  answer: ANSWERS[q.id] || 'A',
  explanation: EXPLANATIONS[q.id] || '暂无解析'
}));
