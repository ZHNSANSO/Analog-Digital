
import { Question, QuestionType } from '../types';

// 1. 题目基础信息
const QUESTIONS_BASE = [
  {
    id: 'des_1', number: 1, type: QuestionType.DESIGN,
    content: '试用 3 线—8 线译码器 74LS138 和门电路实现下列函数。(8分)<br/>\\Z(A, B, C) = AB + \\overline{A}C',
  },
  {
    id: 'des_2', number: 2, type: QuestionType.DESIGN,
    content: '要求与非门设计一个三人表决用的组合逻辑电路图，只要有 2 票或 3 票同意，表决通过（要求有真值表）。',
  },
  {
    id: 'des_3', number: 3, type: QuestionType.DESIGN,
    content: '试用 JK 触发器和门电路设计一个十三进制的计数器，并检查设计的电路能否自启动。（14分）',
  },
  {
    id: 'des_4', number: 4, type: QuestionType.DESIGN,
    content: '两片 74LS161 二进制计数器构成 40 进制计数器，画出电路图。74LS161 为同步 16 进制计数器。（10分）',
  },
  {
    id: 'des_5', number: 5, type: QuestionType.DESIGN,
    content: '用数据选择器实现函数 \\Z = F(A,B,C) = \\sum m(0,2,4,5,6,7) （10分）',
  },
  {
    id: 'des_6', number: 6, type: QuestionType.DESIGN,
    content: '仅用与非门设计一个四变量表决电路。当变量 A、B、C、D 有 3 个或 3 个以上为 1 时，输出 Y=1。',
  }
];

// 2. 答案库
const ANSWERS: Record<string, string> = {
  'des_1': '见解析',
  'des_2': '见解析',
  'des_3': '见解析',
  'des_4': '见解析',
  'des_5': '见解析',
  'des_6': '见解析',
};

// 3. 详细解析库
const EXPLANATIONS: Record<string, string> = {
  'des_1': `
    <div class="space-y-2">
      <div class="font-bold border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">详细解题步骤：</div>
      <p><strong>1. 函数标准化</strong><br/>
      将表达式展开为最小项之和形式：<br/>
      \\Z = AB(C+\\overline{C}) + \\overline{A}C(B+\\overline{B})<br/>
      \\Z = ABC + AB\\overline{C} + \\overline{A}BC + \\overline{A}\\overline{B}C<br/>
      对应二进制：111(m7), 110(m6), 011(m3), 001(m1)<br/>
      即：\\Z = \\sum m(1, 3, 6, 7)</p>
      
      <p><strong>2. 转换逻辑</strong><br/>
      74LS138 译码器输出为低电平有效，即 \\overline{Y_i} = \\overline{m_i}。<br/>
      根据摩根定律，将求和变换为求与非：<br/>
      \\Z = m_1 + m_3 + m_6 + m_7 = \\overline{ \\overline{m_1} \\cdot \\overline{m_3} \\cdot \\overline{m_6} \\cdot \\overline{m_7} }<br/>
      代入译码器输出：<br/>
      \\Z = \\overline{ \\overline{Y_1} \\cdot \\overline{Y_3} \\cdot \\overline{Y_6} \\cdot \\overline{Y_7} }</p>
      
      <p><strong>3. 电路连接</strong><br/>
      输入：A, B, C 接 74LS138 的地址端 \\A_2, A_1, A_0。<br/>
      输出：取 \\overline{Y_1}, \\overline{Y_3}, \\overline{Y_6}, \\overline{Y_7} 接到一个 4 输入与非门。<br/>
      与非门的输出即为 Z。</p>
    </div>
  `,
  
  'des_2': `
    <div class="space-y-2">
      <div class="font-bold border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">详细解题步骤：</div>
      <p><strong>1. 列真值表</strong><br/>
      设 A, B, C 为三人意见（1同意，0反对），Y 为结果。<br/>
      000->0, 001->0, 010->0, 011->1<br/>
      100->0, 101->1, 110->1, 111->1</p>
      
      <p><strong>2. 逻辑表达式</strong><br/>
      取输出为 1 的项：<br/>
      \\Y = \\overline{A}BC + A\\overline{B}C + AB\\overline{C} + ABC<br/>
      化简（利用卡诺图或公式法）：<br/>
      \\Y = AB + BC + AC</p>
      
      <p><strong>3. 与非门变换</strong><br/>
      为了只用与非门，应用两次求反：<br/>
      \\Y = \\overline{ \\overline{AB + BC + AC} } = \\overline{ \\overline{AB} \\cdot \\overline{BC} \\cdot \\overline{AC} }</p>
      
      <p><strong>4. 电路图描述</strong><br/>
      第一级：三个 2 输入与非门，分别输入 (A,B), (B,C), (A,C)。<br/>
      第二级：一个 3 输入与非门，接收第一级的所有输出。<br/>
      最终输出即为 Y。</p>
    </div>
  `,
  
  'des_3': `
    <div class="space-y-2">
      <div class="font-bold border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">详细解题步骤：</div>
      <p><strong>1. 需求分析</strong><br/>
      13 进制计数器需计数 0~12，共 13 个状态。<br/>
      所需触发器数量 n 满足 \\2^n \\ge 13，故取 n=4。</p>
      
      <p><strong>2. 设计方案（反馈清零法）</strong><br/>
      选用 4 位二进制计数器（如由 JK 触发器构成的异步计数器，或直接分析复位逻辑）。<br/>
      计数顺序：0000 -> ... -> 1100 (12) -> 1101 (13瞬间) -> 0000。<br/>
      当状态变为 13 (1101) 时，产生复位信号。<br/>
      复位逻辑：\\R_d = \\overline{Q_3 Q_2 \\overline{Q_1} Q_0}（若用与非门驱动低电平复位）。<br/>
      简化：由于计数是递增的，首次出现 Q3=1, Q2=1, Q0=1 即为 13，故可简化为 \\R_d = \\overline{Q_3 Q_2 Q_0}。</p>
      
      <p><strong>3. 电路连接</strong><br/>
      使用 4 个 JK 触发器构成 4 位二进制计数器。<br/>
      将 \\Q_3, Q_2, Q_0 接到一个 3 输入与非门。<br/>
      与非门输出接到所有触发器的异步清零端 (\\overline{R_d})。</p>
      
      <p><strong>4. 自启动检查</strong><br/>
      采用异步清零法设计的计数器，若进入无效状态 (14:1110, 15:1111)，<br/>
      14(1110): Q3=1, Q2=1，满足复位条件(含Q3Q2)，可能瞬间复位或下一脉冲复位。<br/>
      实际上异步清零是强制的，只要满足逻辑即回零，故能自启动。</p>
    </div>
  `,
  
  'des_4': `
    <div class="space-y-2">
      <div class="font-bold border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">详细解题步骤：</div>
      <p><strong>1. 芯片级联</strong><br/>
      74LS161 是 4 位同步二进制计数器 (16进制)。<br/>
      构建 40 进制需两片（\\16 \\times 16 = 256 > 40）。<br/>
      低位片 (1) 的进位输出 RCO 接高位片 (2) 的使能端 (ENT/ENP)。<br/>
      时钟 CP 同时接两片（同步方式）。</p>
      
      <p><strong>2. 进制反馈</strong><br/>
      40 的二进制为 0010 1000 (高位片 0010=2, 低位片 1000=8)。<br/>
      我们需要在计数器状态由 39 (0010 0111) 跳变到 40 的瞬间，或者计数到 39 结束后同步置零。<br/>
      这里采用<strong>反馈清零法</strong>（利用 161 的异步清零端，若有）：<br/>
      当状态出现 40 (0010 1000) 时，高位片 Q1=1，低位片 Q3=1。<br/>
      逻辑：\\CR = \\overline{Q_{1H} \\cdot Q_{3L}}。<br/>
      用与非门连接高位片的 Q1 和低位片的 Q3，输出接两片的 \\overline{CR}。</p>
      
      <p><strong>3. 结果验证</strong><br/>
      计数范围：0 ~ 39。<br/>
      当第 40 个脉冲到来，状态暂态变为 40，反馈逻辑立刻产生低电平清零，回到 0。<br/>
      电路实现了一个模 40 计数器。</p>
    </div>
  `,

  'des_5': `
    <div class="space-y-2">
      <div class="font-bold border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">详细解题步骤：</div>
      <p><strong>1. 器件选择</strong><br/>
      函数 \\Z(A,B,C) 有 3 个变量。<br/>
      选用 8 选 1 数据选择器 (如 74LS151)，它有 3 个地址端 \\A_2, A_1, A_0 和 8 个数据输入端 \\D_0 \\sim D_7。</p>
      
      <p><strong>2. 地址端连接</strong><br/>
      将变量 A 接 \\A_2，B 接 \\A_1，C 接 \\A_0。<br/>
      此时输出 \\Y = \\sum D_i \\cdot m_i。</p>
      
      <p><strong>3. 数据端配置</strong><br/>
      题目要求 \\Z = \\sum m(0,2,4,5,6,7)。<br/>
      对比标准式：<br/>
      m0 存在 -> \\D_0 = 1<br/>
      m1 不在 -> \\D_1 = 0<br/>
      m2 存在 -> \\D_2 = 1<br/>
      m3 不在 -> \\D_3 = 0<br/>
      m4 存在 -> \\D_4 = 1<br/>
      m5 存在 -> \\D_5 = 1<br/>
      m6 存在 -> \\D_6 = 1<br/>
      m7 存在 -> \\D_7 = 1</p>
      
      <p><strong>4. 总结</strong><br/>
      A,B,C 接地址端；<br/>
      \\D_0, D_2, D_4, D_5, D_6, D_7 接高电平；<br/>
      \\D_1, D_3 接低电平。<br/>
      输出 Y 即为 Z。</p>
    </div>
  `,

  'des_6': `
    <div class="space-y-2">
      <div class="font-bold border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">详细解题步骤：</div>
      <p><strong>1. 逻辑分析</strong><br/>
      四变量 A,B,C,D 表决，3 票或以上同意(1)则通过。<br/>
      满足条件的情况（最小项）：<br/>
      3 个 1：ABC\\overline{D} (m14), AB\\overline{C}D (m13), A\\overline{B}CD (m11), \\overline{A}BCD (m7)。<br/>
      4 个 1：ABCD (m15)。<br/>
      实际上 m14, m13, m11, m7, m15。</p>
      
      <p><strong>2. 化简</strong><br/>
      利用卡诺图或代数法提取公因式：<br/>
      ABC(D+\\overline{D}) = ABC<br/>
      ABD(C+\\overline{C}) = ABD<br/>
      ACD(B+\\overline{B}) = ACD<br/>
      BCD(A+\\overline{A}) = BCD<br/>
      逻辑表达式：\\Y = ABC + ABD + ACD + BCD</p>
      
      <p><strong>3. 与非门变换</strong><br/>
      \\Y = \\overline{ \\overline{ABC} \\cdot \\overline{ABD} \\cdot \\overline{ACD} \\cdot \\overline{BCD} }</p>
      
      <p><strong>4. 电路实现</strong><br/>
      需要 4 个 3 输入与非门，分别输入 (A,B,C), (A,B,D), (A,C,D), (B,C,D)。<br/>
      输出端接 1 个 4 输入与非门。</p>
    </div>
  `,
};

// 4. 合并导出
export const DESIGN_QUESTIONS: Question[] = QUESTIONS_BASE.map(q => ({
  ...q,
  answer: ANSWERS[q.id] || '暂无答案',
  explanation: EXPLANATIONS[q.id] || '暂无解析'
}));
