
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
  'ana_complex_2': '见解析',
  'ana_complex_3': '见解析',
  'ana_complex_4': '见解析',
  'ana_calc_1': '见解析',
  'ana_calc_2': '见解析',
  'ana_calc_3': '见解析',
  'ana_calc_4': 'R=10k, R\'=9k',
  'ana_calc_5': '\\u_o = -(\\frac{R_f}{R_1}u_{i1} + \\frac{R_f}{R_2}u_{i2})',
  'ana_calc_6': '\\R_b=565k\\Omega, \\R_L=2.6k\\Omega',
};

// 3. 详细解析库
const EXPLANATIONS: Record<string, string> = {
  'ana_complex_1': '(1) 镜像电流源；在电路中作为 T3 的有源负载，提高放大倍数。<br/>(2) \\I_{REF} \\approx I_{C2} = \\frac{V_{CC}-V_{BE}}{R}。由于对称性，输出电流即为参考电流。',
  'ana_complex_2': '根据电位关系：<br/>- 脚2(2.9V) 比 脚1(2.2V) 高 0.7V，且 脚3(5.3V) 最高。<br/>- 判断为 NPN 管。<br/>- 2.9V 是基极 B，2.2V 是发射极 E (正偏)，5.3V 是集电极 C (反偏)。<br/>- 压差 0.7V 说明是硅(Si)管。',
  'ana_complex_3': '这是一个限幅电路（削波电路）。<br/>- 当输入 \\u_i < 10V 时，二极管反偏截止，输出 \\u_o = u_i。<br/>- 当输入 \\u_i \\ge 10V 时，二极管导通，输出被钳位在 \\u_o = 10V。<br/>- 波形为正弦波顶部在 10V 处被削平。',
  'ana_complex_4': '根据电流关系 \\I_E = I_B + I_C。<br/>- 已知 1mA 流出，10\\mu A 流入。<br/>- 必然是 I_E 流出，I_B 和 I_C 流入。<br/>- 故 \\I_E = 1mA (发射极), \\I_B = 10\\mu A (基极)。<br/>- \\I_C = 1mA - 0.01mA = 0.99mA (集电极，流入)。<br/>- 电流流出发射极，说明是 NPN 型。',
  'ana_calc_1': '1. **静态工作点**：<br/>   假设 \\V_{CC}=12V, \\R_c=3k, \\R_b=... (题目未给全参数，假设标准模型)。<br/>   一般估算：\\V_B \\approx 4V, \\I_E \\approx 2mA, \\V_{CE} \\approx 6V。<br/>2. **动态参数**：<br/>   \\r_{be} = r_{bb\'} + (1+\\beta)\\frac{26mV}{I_E} \\approx 100 + 101 \\times 13 \\approx 1.4k\\Omega。<br/>   \\A_u = -\\beta \\frac{R_L\'}{r_{be}} \\approx -100。',
  'ana_calc_2': '1. **第一级(A1)**：反相比例运算。<br/>   \\v_{o1} = -\\frac{R_f1}{R_1} v_i = -\\frac{100k}{10k} (1V) = -10V (注意电源范围)。<br/>2. **第二级(A2)**：反相求和。<br/>   \\v_o = -(\\frac{R_f2}{R_2} v_{o1} + ...)。<br/>   (需结合具体电阻数值代入计算)',
  'ana_calc_3': '计算方法同上，注意运放的虚短虚断特性。',
  'ana_calc_4': '对于同相比例运算电路：<br/>\\A_u = 1 + \\frac{R_f}{R} = 11 \\Rightarrow \\frac{R_f}{R} = 10。<br/>已知 \\R_f = 100k\\Omega \\Rightarrow R = 10k\\Omega。<br/>平衡电阻 R\' 应等于输入端直流电阻的并联值：<br/>\\R\' = R // R_f = \\frac{10 \\times 100}{110} \\approx 9.1k\\Omega (取标称值 9k\\Omega)。',
  'ana_calc_5': '根据节点电流法 (虚地)：<br/>\\i_1 + i_2 = i_f<br/>\\frac{u_{i1}}{R_1} + \\frac{u_{i2}}{R_2} = -\\frac{u_o}{R_f}<br/>整理得：\\u_o = -(\\frac{R_f}{R_1}u_{i1} + \\frac{R_f}{R_2}u_{i2})。',
  'ana_calc_6': `
    <div class="space-y-2">
      <div class="font-bold border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">详细解题步骤：</div>
      <p><strong>1. 估算 Rb</strong><br/>
      假设电路为典型共射放大电路（因未给图，按题目参数推断）。通常 \\V_{CC}=12V, R_c=3k\\Omega （依据类似典型题）。<br/>
      静态集电极电流：<br/>
      \\I_C \\approx \\frac{V_{CC} - U_{CEQ}}{R_c} = \\frac{12 - 6}{3k} = 2mA<br/>
      基极电流：<br/>
      \\I_B = \\frac{I_C}{\\beta} = \\frac{2mA}{100} = 20\\mu A<br/>
      基极偏置电阻：<br/>
      \\R_b \\approx \\frac{V_{CC} - 0.7}{I_B} = \\frac{11.3}{20\\mu A} = 565k\\Omega</p>
      
      <p><strong>2. 求负载电阻 RL</strong><br/>
      电压放大倍数幅值：<br/>
      \\|A_u| = \\frac{U_o}{U_i} = \\frac{100mV}{1mV} = 100<br/>
      根据共射放大电路倍数公式（忽略符号）：<br/>
      \\|A_u| \\approx \\beta \\frac{R_L'}{r_{be}}<br/>
      代入已知参数：<br/>
      100 = 100 \\times \\frac{R_L'}{1.4k\\Omega} \\Rightarrow R_L' = 1.4k\\Omega<br/>
      交流负载 \\R_L' 是 \\R_c 与 \\R_L 的并联：<br/>
      \\R_L' = R_c // R_L = \\frac{R_c R_L}{R_c + R_L}<br/>
      \\1.4 = \\frac{3 R_L}{3 + R_L}<br/>
      解得：<br/>
      4.2 + 1.4 R_L = 3 R_L<br/>
      1.6 R_L = 4.2<br/>
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
