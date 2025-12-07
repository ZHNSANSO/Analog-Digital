
import { Question, QuestionType } from '../types';

// B卷专用题目
const QUESTIONS_BASE = [
  // --- 二、数制转换 (归入填空) ---
  { id: 'dp_b_num_1', number: 1, type: QuestionType.FILL_BLANK, content: '完成数制转换：\\(11.001)_2 = (____)_{10}' },
  { id: 'dp_b_num_2', number: 2, type: QuestionType.FILL_BLANK, content: '完成数制转换：\\(8F.FF)_{16} = (____)_{2}' },
  { id: 'dp_b_num_3', number: 3, type: QuestionType.FILL_BLANK, content: '完成数制转换：\\(25.7)_{10} = (____)_{2} = (____)_{16}' },
  { id: 'dp_b_num_4', number: 4, type: QuestionType.FILL_BLANK, content: '已知 \\(+1011B\\)，求其原码=(____)，反码=(____)，补码=(____)' },
  { id: 'dp_b_num_5', number: 5, type: QuestionType.FILL_BLANK, content: '已知 \\(-101010B\\)，求其原码=(____)，反码=(____)，补码=(____)' },

  // --- 三、化简题 ---
  { id: 'dp_b_simp_1', number: 1, type: QuestionType.SIMPLIFICATION, content: '利用摩根定律证明公式：\\overline{A \\cdot B} = \\overline{A} + \\overline{B}' },
  { id: 'dp_b_simp_2', number: 2, type: QuestionType.SIMPLIFICATION, content: '画出卡诺图并化简：\\Y = \\sum m(0, 2, 8, 10)' },

  // --- 四、画图题 ---
  { id: 'dp_b_draw_1', number: 1, type: QuestionType.DRAWING, content: '试画出下列触发器的输出波形（设触发器的初态为 0）。<br/>（图示为下降沿触发的 JK 触发器，J=1, K=1，即计数翻转状态）' },

  // --- 五、分析题 ---
  { id: 'dp_b_ana_1', number: 1, type: QuestionType.DIGITAL_ANALYSIS, content: '分析如图所示组合逻辑电路的功能。<br/>（图示为 3 个与非门构成的电路，输入 A, B, C，输出 Y）' },
  { id: 'dp_b_ana_2', number: 2, type: QuestionType.DIGITAL_ANALYSIS, content: '74LS161 组成的电路如图所示，分析电路，并回答以下问题：<br/>(1) 画出电路的状态转换图 (Q3Q2Q1Q0)；<br/>(2) 说出电路的功能。' },

  // --- 六、设计题 ---
  { id: 'dp_b_des_1', number: 1, type: QuestionType.DESIGN, content: '要求用与非门设计一个三人表决用的组合逻辑电路图，只要有 2 票或 3 票同意，表决通过（要求有真值表）。' },
  { id: 'dp_b_des_2', number: 2, type: QuestionType.DESIGN, content: '试用 JK 触发器和门电路设计一个十三进制的计数器，并检查设计的电路能否自启动。' },

  // --- 七、综合题 ---
  { id: 'dp_b_comp_1', number: 1, type: QuestionType.COMPREHENSIVE, content: '说明如图 5 所示的用 555 定时器构成的电路功能，求出 \\UT+, \\UT- 和 \\Delta UT，并画出其输出波形。<br/>（图示：555 2,6 脚相连输入，典型施密特触发器）' }
];

const ANSWERS: Record<string, string> = {
  'dp_b_num_1': '3.125',
  'dp_b_num_2': '10001111.11111111',
  'dp_b_num_3': '11001.1011..., 19.B...',
  'dp_b_num_4': '01011, 01011, 01011',
  'dp_b_num_5': '1101010, 1010101, 1010110',
  'dp_b_simp_1': '见解析',
  'dp_b_simp_2': 'Y = \\overline{B} \\cdot \\overline{D}',
  'dp_b_draw_1': '见解析',
  'dp_b_ana_1': '三人表决电路',
  'dp_b_ana_2': '十六进制计数器',
  'dp_b_des_1': '见解析',
  'dp_b_des_2': '见解析',
  'dp_b_comp_1': '施密特触发器',
};

const EXPLANATIONS: Record<string, string> = {
  'dp_b_num_1': '3 + 0.125 = 3.125',
  'dp_b_num_2': '8->1000, F->1111. 结果：10001111.11111111',
  'dp_b_simp_2': 'm0, m2, m8, m10 构成四角包围圈，消去 A, C，剩余 \\overline{B}\\overline{D}。',
  'dp_b_ana_1': '表达式 Y=AB+BC+AC，为三人表决器。',
  'dp_b_ana_2': '74LS161 无反馈清零/置数，工作在自然计数状态，即模 16 计数器。',
  'dp_b_des_2': '13 进制需 4 个触发器，利用 1101 (13) 状态产生复位信号。',
  'dp_b_comp_1': '555 构成的施密特触发器，回差电压为 1/3 Vcc。'
};

export const DIGITAL_PAPER_QUESTIONS_B: Question[] = QUESTIONS_BASE.map(q => ({
  ...q,
  paper: 'digital_paper',
  paperSet: 'B', // 标记为 B 卷
  answer: ANSWERS[q.id] || '见解析',
  explanation: EXPLANATIONS[q.id] || '暂无解析'
}));
