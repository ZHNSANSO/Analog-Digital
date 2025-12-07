
import { Question, QuestionType } from '../types';

// 1. 题目基础信息
const QUESTIONS_BASE = [
  // --- Analysis (IV) ---
  {
    id: 'ana_complex_1', number: 1, type: QuestionType.ANALOG_ANALYSIS,
    content: '某集成运放的单元电路如图所示，设 T1、T2 特性相同，且 \\beta 足够大。问：<br/>(1) T1 和 T2 组成什么电路？在电路中起什么作用？<br/>(2) 写出 \\I_{REF} 和 \\I_{C2} 的表达式，设 \\V_{BE}=0.7V, \\V_{CC} 和 R 已知。<br/>(此处应有镜像电流源图)',
  },
  {
    id: 'ana_complex_2', number: 2, type: QuestionType.ANALOG_ANALYSIS,
    content: '三极管 BJT 放大电路中，测得一只 BJT 的三个电极电位如图。判断管型(NPN/PNP)及材料(Si/Ge)，并标出e, b, c。<br/>(1: 2.2V, 2: 2.9V, 3: 5.3V)',
  },
  {
    id: 'ana_complex_3', number: 3, type: QuestionType.ANALOG_ANALYSIS,
    content: '电路如图a所示，\\u_i=5\\sin\\omega t(V)，\\u_{DC}=10V，二极管理想，画出 \\u_o 波形。',
  },
  {
    id: 'ana_complex_4', number: 4, type: QuestionType.ANALOG_ANALYSIS,
    content: '已知 BJT 管子两个电极电流如图，求另一电极电流，说明管子类型。 (10\\mu A流入, 1mA流出)',
  },

  // --- Calculation (V) ---
  {
    id: 'ana_calc_1', number: 1, type: QuestionType.CALCULATION,
    content: '在图所示电路中，\\beta=100，\\r_{bb\'}=100\\Omega。计算：1) 静态工作点；2) 电压放大倍数 \\A_u。<br/>(阻容耦合共射放大电路)',
  },
  {
    id: 'ana_calc_2', number: 2, type: QuestionType.CALCULATION,
    content: '电路如图，运放理想，求 \\v_{o1}, \\v_{o2}, \\v_o。<br/>(两级运放：A1反相比例，A2反相求和)',
  },
  {
    id: 'ana_calc_3', number: 3, type: QuestionType.CALCULATION,
    content: '电路如图，求 \\v_{o1}, \\v_{o2} 和 \\v_o。<br/>(同题2图结构类似，参数不同)',
  },
  {
    id: 'ana_calc_4', number: 4, type: QuestionType.CALCULATION,
    content: '在图示电路中，要求 \\R_f=100k\\Omega，比例系数为 11，试求解 R 和 R\' 的阻值。',
  },
  {
    id: 'ana_calc_5', number: 5, type: QuestionType.CALCULATION,
    content: '求解图示电路的运算关系式。<br/>(反相求和电路)',
  },
  {
    id: 'ana_calc_6', number: 6, type: QuestionType.CALCULATION,
    content: '已知 \\beta=100, \\r_{be}=1.4k\\Omega。1) 测得 \\U_{CEQ}=6V, 估算 \\R_b；2) 若测得 \\U_i 和 \\U_o 有效值分别为 1mV 和 100mV，求 \\R_L。',
  }
];

// 2. 答案库
const ANSWERS: Record<string, string> = {
  'ana_complex_1': '见解析',
  'ana_complex_2': 'NPN, 硅管, 1:E 2:B 3:C',
  'ana_complex_3': '限幅电路，波形顶部削平',
  'ana_complex_4': '0.99mA 流入, NPN',
  'ana_calc_1': '见解析',
  'ana_calc_2': '见解析',
  'ana_calc_3': '见解析',
  'ana_calc_4': 'R=10k, R\'=9k',
  'ana_calc_5': '\\u_o = -(\\frac{R_f}{R_1}u_{i1} + \\frac{R_f}{R_2}u_{i2})',
  'ana_calc_6': '\\R_b=565k\\Omega, \\R_L=2.6k\\Omega',
};

// 3. 详细解析库
const EXPLANATIONS: Record<string, string> = {
  'ana_complex_1': `
    <div class="space-y-2">
      <div class="font-bold border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">详细分析：</div>
      <p><strong>(1) 电路名称与作用</strong><br/>
      T1、T2 组成**镜像电流源**电路。<br/>
      在集成运放中，它通常作为放大级（如差分放大电路）的**有源负载**，用于提高电压放大倍数；或为各级提供稳定的直流偏置电流。</p>
      
      <p><strong>(2) 电流表达式推导</strong><br/>
      参考电流 \\I_{REF} 主要由电源 \\V_{CC} 和电阻 R 决定：<br/>
      \\I_{REF} = \\frac{V_{CC} - V_{BE}}{R}<br/>
      对于镜像电流源，由于 T1、T2 特性完全匹配，且基极相连，故 \\V_{BE1} = V_{BE2}。<br/>
      若 \\beta 足够大，忽略基极电流的分流影响，则输出电流：<br/>
      \\I_{C2} \\approx I_{REF} = \\frac{V_{CC} - V_{BE}}{R}</p>
    </div>
  `,

  'ana_complex_2': `
    <div class="space-y-2">
      <div class="font-bold border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">详细分析步骤：</div>
      <p><strong>1. 确定基极 (B) 和发射极 (E)</strong><br/>
      三极管工作在放大状态时，发射结必须正偏（电压差 0.2V~0.7V）。<br/>
      观察各脚电位：<br/>
      脚 1: 2.2V<br/>
      脚 2: 2.9V<br/>
      脚 3: 5.3V<br/>
      脚 2 和脚 1 之间电位差为 \\2.9 - 2.2 = 0.7V。这符合硅管发射结压降。<br/>
      所以，脚 2 和脚 1 分别是基极和发射极。</p>
      
      <p><strong>2. 判断管型 (NPN/PNP)</strong><br/>
      若为 NPN：\\V_B > V_E。此时 \\2.9V > 2.2V，成立。<br/>
      若为 PNP：\\V_E > V_B。不成立。<br/>
      因此是 **NPN 型**。</p>
      
      <p><strong>3. 确定集电极 (C)</strong><br/>
      剩余的脚 3 (5.3V) 为集电极。<br/>
      检查偏置：NPN 管集电结应反偏，即 \\V_C > V_B。<br/>
      5.3V > 2.9V，满足放大条件。</p>
      
      <p><strong>4. 判断材料</strong><br/>
      \\|V_{BE}| = 0.7V，故为**硅管** (Si)。</p>
      
      <p><strong>结论：</strong><br/>
      1号脚：发射极 E<br/>
      2号脚：基极 B<br/>
      3号脚：集电极 C<br/>
      类型：NPN 硅管。</p>
    </div>
  `,

  'ana_complex_3': `
    <div class="space-y-2">
      <div class="font-bold border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">详细分析：</div>
      <p><strong>1. 电路模型</strong><br/>
      这是一个二极管限幅电路。<br/>
      输入 \\u_i 为正弦波，\\u_{DC} = 10V 接在二极管阴极侧（假设典型串联限幅结构，输出取自二极管两端或并联支路，依据一般题型推断为二极管与直流电源串联支路并联在负载两端）。</p>
      
      <p><strong>2. 工作状态分析</strong><br/>
      - 当 \\u_i < 10V 时：二极管阳极电位低于阴极电位（或不足以导通），二极管截止。此时相当于开路，输出 \\u_o 随输入变化，\\u_o = u_i。<br/>
      - 当 \\u_i \\ge 10V 时：二极管导通（视为短路）。输出端被电源钳位在 10V，\\u_o = 10V。</p>
      
      <p><strong>3. 波形描述</strong><br/>
      输出波形是一个正弦波，但在正半周超过 10V 的部分被“削平”，保持在 10V 直线。<br/>
      负半周及小于 10V 部分保持完整的正弦形状。</p>
    </div>
  `,

  'ana_complex_4': `
    <div class="space-y-2">
      <div class="font-bold border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">详细计算：</div>
      <p><strong>1. 识别电流</strong><br/>
      已知：<br/>
      电流 1：1mA (流出管子)<br/>
      电流 2：10\\mu A = 0.01mA (流入管子)<br/>
      根据三极管电流关系：\\I_E = I_B + I_C。<br/>
      发射极电流 \\I_E 是最大的，且 \\I_E 与 \\I_B, I_C 方向相反。<br/>
      因为 1mA 远大于 0.01mA，且方向相反（流出 vs 流入）。<br/>
      判定：流出的 1mA 为发射极电流 \\I_E。</p>
      
      <p><strong>2. 确定管型</strong><br/>
      电流从发射极**流出**，说明是 **NPN 型**三极管。</p>
      
      <p><strong>3. 计算第三极电流</strong><br/>
      流入的 0.01mA 较小，通常是基极电流 \\I_B。<br/>
      根据 KCL：流入 = 流出。<br/>
      \\I_B + I_C = I_E<br/>
      \\0.01mA + I_C = 1mA<br/>
      \\I_C = 1 - 0.01 = 0.99mA<br/>
      集电极电流 \\I_C 为 0.99mA，方向为**流入**。</p>
    </div>
  `,

  'ana_calc_1': `
    <div class="space-y-2">
      <div class="font-bold border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">详细计算步骤：</div>
      <p><strong>注：</strong>由于缺乏具体电阻数值（Rb, Rc）和电源电压 Vcc，以下给出标准计算公式流程。</p>
      
      <p><strong>1. 静态工作点 (Q点) 计算</strong><br/>
      对于阻容耦合共射放大电路：<br/>
      (1) 求基极电流：<br/>
      \\I_B = \\frac{V_{CC} - V_{BE}}{R_b} \\approx \\frac{V_{CC}}{R_b}<br/>
      (2) 求集电极电流：<br/>
      \\I_C = \\beta I_B<br/>
      (3) 求管压降：<br/>
      \\V_{CE} = V_{CC} - I_C R_c</p>
      
      <p><strong>2. 动态参数计算</strong><br/>
      (1) 求输入电阻 \\r_{be}：<br/>
      \\r_{be} = r_{bb'} + (1+\\beta) \\frac{26mV}{I_E(mA)}<br/>
      其中 \\I_E \\approx I_C。<br/>
      (2) 求电压放大倍数 \\A_u：<br/>
      \\A_u = -\\beta \\frac{R_L'}{r_{be}}<br/>
      其中 \\R_L' = R_c // R_L（若无外接负载则为 Rc）。</p>
    </div>
  `,

  'ana_calc_2': `
    <div class="space-y-2">
      <div class="font-bold border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">详细计算步骤：</div>
      <p><strong>1. 第一级分析 (A1)</strong><br/>
      A1 构成**反相比例运算电路**。<br/>
      输出电压 \\v_{o1}：<br/>
      \\v_{o1} = -\\frac{R_{f1}}{R_1} v_i<br/>
      （需代入图中具体阻值，例如若 Rf=100k, R1=10k, vi=1V，则 vo1 = -10V）</p>
      
      <p><strong>2. 第二级分析 (A2)</strong><br/>
      A2 构成**反相求和运算电路**（假设其有多个输入，或仅处理 vo1）。<br/>
      若仅输入 vo1，则为反相比例：<br/>
      \\v_o = -\\frac{R_{f2}}{R_2} v_{o1}<br/>
      代入 vo1 表达式：<br/>
      \\v_o = -\\frac{R_{f2}}{R_2} (-\\frac{R_{f1}}{R_1} v_i) = \\frac{R_{f2} R_{f1}}{R_2 R_1} v_i</p>
      
      <p><strong>3. 结论</strong><br/>
      整个电路相当于两级级联，总信号相位与输入同相。</p>
    </div>
  `,

  'ana_calc_3': `
    <div class="space-y-2">
      <div class="font-bold border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">详细计算步骤：</div>
      <p>此题结构与题 2 类似，通常考察不同的电阻参数配置。</p>
      <p><strong>关键公式：</strong><br/>
      1. 虚短与虚断：\\v_+ = v_- = 0 (反相端虚地)<br/>
      2. 节点电流法：\\i_{in} = i_{feedback}<br/>
      3. \\v_{o1} = -\\frac{R_{feedback1}}{R_{in1}} v_{i}<br/>
      4. \\v_{o} = -(\\frac{R_{f2}}{R_{in2}} v_{o1} + \\frac{R_{f2}}{R_{in3}} v_{other})<br/>
      请根据图中具体标号代入计算。</p>
    </div>
  `,

  'ana_calc_4': `
    <div class="space-y-2">
      <div class="font-bold border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">详细计算步骤：</div>
      <p><strong>1. 识别电路</strong><br/>
      图示为**同相比例运算电路**。</p>
      
      <p><strong>2. 建立方程</strong><br/>
      电压放大倍数公式为：<br/>
      \\A_u = 1 + \\frac{R_f}{R}<br/>
      已知条件：<br/>
      \\A_u = 11<br/>
      \\R_f = 100k\\Omega</p>
      
      <p><strong>3. 求解 R</strong><br/>
      \\11 = 1 + \\frac{100k}{R}<br/>
      \\10 = \\frac{100k}{R}<br/>
      \\R = 10k\\Omega</p>
      
      <p><strong>4. 求解平衡电阻 R'</strong><br/>
      为了保证运放输入级偏置电流造成的误差最小，同相端电阻应等于反相端直流等效电阻。<br/>
      \\R' = R // R_f = \\frac{10k \\times 100k}{10k + 100k}<br/>
      \\R' = \\frac{1000}{110} k\\Omega \\approx 9.09 k\\Omega<br/>
      工程上常取标称值 **9.1kΩ** 或 **9kΩ**。</p>
    </div>
  `,

  'ana_calc_5': `
    <div class="space-y-2">
      <div class="font-bold border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">详细推导步骤：</div>
      <p><strong>1. 电路结构</strong><br/>
      图示为多输入**反相求和运算电路**。</p>
      
      <p><strong>2. 利用虚地概念</strong><br/>
      运放同相端接地，故反相端电位 \\v_- \\approx 0 (虚地)。</p>
      
      <p><strong>3. 节点电流方程</strong><br/>
      对反相输入端节点列 KCL 方程（流入电流等于流出电流）：<br/>
      \\i_1 + i_2 = i_f<br/>
      \\frac{u_{i1} - 0}{R_1} + \\frac{u_{i2} - 0}{R_2} = \\frac{0 - u_o}{R_f}</p>
      
      <p><strong>4. 整理得输出表达式</strong><br/>
      \\frac{u_{i1}}{R_1} + \\frac{u_{i2}}{R_2} = -\\frac{u_o}{R_f}<br/>
      \\u_o = -R_f (\\frac{u_{i1}}{R_1} + \\frac{u_{i2}}{R_2})<br/>
      即：\\u_o = -(\\frac{R_f}{R_1}u_{i1} + \\frac{R_f}{R_2}u_{i2})</p>
    </div>
  `,

  'ana_calc_6': `
    <div class="space-y-2">
      <div class="font-bold border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">详细解题步骤：</div>
      <p><strong>1. 估算基极电阻 Rb</strong><br/>
      假设电路为典型共射放大电路，且电源 \\V_{CC}=12V, R_c=3k\\Omega （根据题目参数语境推断的典型值，若题目未给则无法精确计算，此处按经典例题反推）。<br/>
      静态集电极电流：<br/>
      \\I_C \\approx \\frac{V_{CC} - U_{CEQ}}{R_c} = \\frac{12 - 6}{3k} = 2mA<br/>
      基极电流：<br/>
      \\I_B = \\frac{I_C}{\\beta} = \\frac{2mA}{100} = 20\\mu A<br/>
      基极偏置电阻：<br/>
      \\R_b \\approx \\frac{V_{CC} - V_{BE}}{I_B} = \\frac{12 - 0.7}{20\\mu A} = \\frac{11.3V}{0.02mA} = 565k\\Omega</p>
      
      <p><strong>2. 求负载电阻 RL</strong><br/>
      (1) 计算电压放大倍数幅值：<br/>
      \\|A_u| = \\frac{U_o}{U_i} = \\frac{100mV}{1mV} = 100<br/>
      (2) 利用动态参数公式：<br/>
      \\|A_u| \\approx \\beta \\frac{R_L'}{r_{be}}<br/>
      代入已知数值：<br/>
      100 = 100 \\times \\frac{R_L'}{1.4k\\Omega}<br/>
      解得交流负载电阻：\\R_L' = 1.4k\\Omega<br/>
      (3) 求解 RL：<br/>
      交流负载是 Rc 与 RL 的并联值：\\R_L' = R_c // R_L<br/>
      \\1.4 = \\frac{3 \\times R_L}{3 + R_L}<br/>
      \\1.4(3 + R_L) = 3R_L<br/>
      \\4.2 + 1.4R_L = 3R_L<br/>
      \\1.6R_L = 4.2<br/>
      \\R_L = 2.625 k\\Omega \\approx 2.6 k\\Omega</p>
    </div>
  `
};

// 合并函数
export const ANALOG_COMPLEX_QUESTIONS: Question[] = QUESTIONS_BASE.map(q => ({
  ...q,
  answer: ANSWERS[q.id] || '暂无答案',
  explanation: EXPLANATIONS[q.id] || '暂无解析'
}));
