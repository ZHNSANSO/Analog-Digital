import { Question, QuestionType } from '../types';

export const COMPLEX_QUESTIONS: Question[] = [
  // --- 函数化简题 ---
  {
    id: 'simp_1',
    number: 1,
    type: QuestionType.SIMPLIFICATION,
    content: '用卡诺图化简函数为最简单的与或式（画图）：<br/>Y = ∑m(0,2,8,10)',
    answer: 'Y = <span class="overline">B</span><span class="overline">D</span>',
    explanation: '详细解析：<br/>1. **画卡诺图**：四变量卡诺图。<br/>2. **填1**：在 m0(0000), m2(0010), m8(1000), m10(1010) 位置填 1。<br/>3. **圈组**：这四个格位于卡诺图的四个角，在逻辑上相邻，可以圈成一个 4-格圈。<br/>4. **消元**：<br/>   - A 变化 (0->1)，消去 A。<br/>   - B 不变 (0)，保留 B\'。<br/>   - C 变化 (0->1)，消去 C。<br/>   - D 不变 (0)，保留 D\'。<br/>5. **结果**：Y = B\'D\'。'
  },
  {
    id: 'simp_2',
    number: 2,
    type: QuestionType.SIMPLIFICATION,
    content: 'Y(A, B, C, D) = ∑m(2, 6, 7, 8, 9, 10, 11, 13, 14, 15)',
    answer: 'Y = AD + BC + CD\' + A<span class="overline">B</span><span class="overline">D</span>',
    explanation: '详细解析：<br/>1. **填卡诺图**：将对应最小项位置填 1。<br/>2. **圈组策略**（参考原题答案逻辑）：<br/>   - 圈 m8,m9,m10,m11,m13,m14,m15 等大面积区域。<br/>   - 观察答案项：<br/>     AD: 对应 m9, m11, m13, m15 (A=1, D=1)。<br/>     BC: 对应 m6, m7, m14, m15 (B=1, C=1)。<br/>     CD\': 对应 m2, m6, m10, m14 (C=1, D=0)。<br/>     AB\'D: ...<br/>   *(注：原题答案为 Y=AD+BC+CD\'+AB\'D\' 或类似形式，根据图解圈法，主要利用卡诺图的重叠覆盖)*'
  },
  {
    id: 'simp_3',
    number: 3,
    type: QuestionType.SIMPLIFICATION,
    content: '对 Z 函数要求：(1) 列出真值表；(2) 用卡诺图化简；(3) 画出化简后的逻辑图。<br/> Z = <span class="overline">AB</span> + <span class="overline">A</span>•<span class="overline">B</span>•C + <span class="overline">A</span>•B•<span class="overline">C</span> <br/> 约束条件 BC=0',
    answer: 'Z = A ⊕ B + C (或 Z = AB\' + A\'B + C)',
    explanation: '详细解析：<br/>1. **处理约束**：BC=0 意味着 BC=1 的情况（即 ABC=011, 111）是不可能出现的，视为无关项 X。<br/>2. **化简表达式**：<br/>   Z = (AB)\' + A\'B\'C + A\'BC\'<br/>   注意 (AB)\' = A\' + B\' (德摩根定律)，这里原题表达式可能有特殊排版，假定为图片所示的标准与或非结构。<br/>   根据图片答案卡诺图圈法：<br/>   化简得 Z = A\'B + AB\' + C。<br/>   即 Z = (A ⊕ B) + C。<br/>3. **逻辑图**：用一个异或门输入 A, B，输出接一个或门，或门的另一端接 C。'
  },

  // --- 分析题 ---
  {
    id: 'ana_1',
    number: 1,
    type: QuestionType.DIGITAL_ANALYSIS,
    content: '74LS161 是同步 4 位二进制加法计数器，其逻辑功能表如下，试分析下列电路是几进制计数器，并画出其状态图。（8分）<br/>（此处应当有电路图：74LS161 反馈清零法）',
    imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=Circuit+Image+Unavailable',
    answer: '十进制计数器',
    explanation: '详细解析：<br/>1. **电路分析**：观察电路反馈连接。Q3 Q2 Q1 Q0 连接与非门，输出接 CR (清零端)。<br/>2. **反馈条件**：当计数状态达到 Q3Q2Q1Q0 = 1010 (即十进制 10) 时，与非门输出 0。<br/>3. **清零动作**：CR 为低电平有效。异步清零（或同步清零取决于芯片具体型号，161通常是异步清零，163是同步）。题目描述为“与非门输出0，清零信号到来”。<br/>4. **进制判断**：计数器从 0000 计到 1001 (9)，当跳变为 1010 瞬间立刻清零回 0000。<br/>   有效状态为 0~9，共 10 个状态。<br/>   因此是**十进制计数器**。<br/>5. **状态图**：画 10 个圈 (0000到1001)，首尾箭头相连。'
  },
  {
    id: 'ana_2',
    number: 2,
    type: QuestionType.DIGITAL_ANALYSIS,
    content: '触发器电路如图所示，试根据 CP 及输入波形画出输出端 Q₁、Q₂ 的波形。设各触发器的初始状态均为“0”。（6分）<br/>（此处应当有波形图）',
    imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=Waveform+Unavailable',
    answer: '见解析',
    explanation: '详细解析：<br/>1. **识别电路**：观察电路结构，通常是时序逻辑，可能是一个计数器或移位寄存器。<br/>   假设图示为两个 JK 触发器构成的电路。<br/>2. **分析方程**：写出 Q1 和 Q2 的驱动方程。<br/>3. **画波形**：<br/>   - CP 上升/下降沿触发。<br/>   - 根据当前状态和输入决定次态。<br/>   - 例如：CP1 到来，Q1 翻转...<br/>   （注：由于无具体波形图，请依据教材标准时序图绘制方法：标出时钟沿，向下引虚线，分段画电平。）'
  },
  {
    id: 'ana_3',
    number: 3,
    type: QuestionType.DIGITAL_ANALYSIS,
    content: '分析图所示组合逻辑电路的功能。<br/>（图示为三个与非门构成的表决电路结构）',
    imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=Logic+Diagram+Unavailable',
    answer: '三位多数表决电路',
    explanation: '详细解析：<br/>1. **写表达式**：<br/>   Y = AB + BC + CA (或与之等价的与非-与非形式)。<br/>2. **列真值表**：<br/>   A B C | Y<br/>   0 0 0 | 0<br/>   0 0 1 | 0<br/>   0 1 0 | 0<br/>   0 1 1 | 1 (2个1)<br/>   1 0 0 | 0<br/>   1 0 1 | 1 (2个1)<br/>   1 1 0 | 1 (2个1)<br/>   1 1 1 | 1 (3个1)<br/>3. **分析功能**：<br/>   只要输入 A, B, C 中有 2 个或 3 个为 1，输出 Y 就为 1；否则为 0。<br/>   这就是典型的**三人表决器**（少数服从多数）。'
  },
  {
    id: 'ana_4',
    number: 4,
    type: QuestionType.DIGITAL_ANALYSIS,
    content: '分析图所示的时序电路的逻辑功能，写出电路的驱动方程、状态方程和输出方程，画出电路的状态转换图，并说明该电路是否能自启动。（15分）<br/>（图示为三个D触发器构成的电路）',
    imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=Sequence+Circuit+Unavailable',
    answer: '五进制计数器，能自启动',
    explanation: '详细解析：<br/>1. **驱动方程**：根据电路图写出 D1, D2, D3 的表达式。<br/>   例如：D1 = Q3\'; D2 = Q1; D3 = Q1Q2 (假设示例)。<br/>2. **状态方程**：Q(n+1) = D。<br/>3. **状态转换**：<br/>   代入初值计算循环。<br/>   假设路径为 000 -> 001 -> 010 -> 100 -> 101 -> 000。<br/>4. **自启动分析**：<br/>   检查剩下的 3 个无效状态 (011, 110, 111)。<br/>   若它们经过 CP 后能进入有效循环，则能自启动。<br/>   （根据原题答案图：该电路有效状态 5 个，且能自启动）。'
  },

  // --- 设计应用题 ---
  {
    id: 'des_1',
    number: 1,
    type: QuestionType.DESIGN,
    content: '试用 3 线—8 线译码器 74LS138 和门电路实现下列函数。(8分)<br/>Z(A, B, C) = AB + <span class="overline">A</span>C',
    answer: '见解析',
    explanation: '详细解析：<br/>1. **标准形式化**：将函数转换为最小项之和。<br/>   Z = AB(C+C\') + A\'C(B+B\') = ABC + ABC\' + A\'BC + A\'B\'C<br/>   Z = m7 + m6 + m3 + m1<br/>   Z = ∑m(1, 3, 6, 7)。<br/>2. **利用译码器**：<br/>   74LS138 输出为低电平有效的最小项非 (m_i\')。<br/>   利用与非门实现或逻辑：Z = (m1\' m3\' m6\' m7\')\' = m1 + m3 + m6 + m7。<br/>3. **连线**：<br/>   - A, B, C 接 138 的 A2, A1, A0。<br/>   - 138 的输出 Y1, Y3, Y6, Y7 接到一个 4 输入与非门。<br/>   - 与非门输出即为 Z。'
  },
  {
    id: 'des_2',
    number: 2,
    type: QuestionType.DESIGN,
    content: '要求与非门设计一个三人表决用的组合逻辑电路图，只要有 2 票或 3 票同意，表决通过（要求有真值表）。',
    answer: '见解析',
    explanation: '详细解析：<br/>1. **真值表**：(见分析题 3)<br/>2. **逻辑表达式**：Y = AB + BC + CA。<br/>3. **与非门变换**：<br/>   应用两次求反：Y = ((AB + BC + CA)\')\'<br/>   Y = ((AB)\' • (BC)\' • (CA)\')\'<br/>4. **画图**：<br/>   - 3 个 2 输入与非门分别实现 (AB)\', (BC)\', (CA)\'。<br/>   - 1 个 3 输入与非门汇聚上述输出。<br/>   - 即可实现功能。'
  },
  {
    id: 'des_3',
    number: 3,
    type: QuestionType.DESIGN,
    content: '试用 JK 触发器和门电路设计一个十三进制的计数器，并检查设计的电路能否自启动。（14分）',
    answer: '见解析',
    explanation: '详细解析：<br/>1. **确定位数**：13 进制需 4 个触发器 (2⁴=16 > 13)。<br/>2. **状态分配**：通常取 0000 ~ 1100 (0~12) 为有效状态。<br/>3. **求驱动方程**：<br/>   - 画出次态卡诺图。<br/>   - 使用 JK 触发器激励表 (0->0: 0X; 0->1: 1X...)。<br/>   - 化简得到 J0, K0, J1, K1... 的方程。<br/>4. **自启动检查**：<br/>   - 将无效状态 (1101, 1110, 1111) 代入驱动方程，看次态是否进入 0~12 集合。<br/>   - 若能进入则可自启动。'
  },
  {
    id: 'des_4',
    number: 4,
    type: QuestionType.DESIGN,
    content: '两片 74LS161 二进制计数器构成 40 进制计数器，画出电路图。74LS161 为同步 16 进制计数器。（10分）',
    answer: '见解析',
    explanation: '详细解析：<br/>1. **级联**：<br/>   - 40 > 16，需两片。<br/>   - 低位片 (1) 的进位输出 RCO 接高位片 (2) 的使能端 (EP/ET)。<br/>   - 时钟 CP 并联。<br/>2. **进制转换**：<br/>   - 总模数 M = 16 * 16 = 256。<br/>   - 需改为 40 进制。利用**整体置零法**或**整体置数法**。<br/>   - 40 的二进制是 0010 1000 (高位片 0010=2, 低位片 1000=8)。<br/>3. **反馈连接**：<br/>   - 当输出达到 39 (0010 0111) 或 40 (0010 1000) 时产生复位信号。<br/>   - 若用清零法：当计数到 40 (0010 1000) 瞬间，取高位 Q1 和低位 Q3 用与非门接两片 CR 端。<br/>   - 电路回 0。'
  }
];
