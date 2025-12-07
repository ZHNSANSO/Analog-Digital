
import { Question, QuestionType } from '../types';

// 1. 题目基础信息库
const QUESTIONS_BASE = [
  { id: 'fill_1', number: 1, type: QuestionType.FILL_BLANK, content: '有一数码 10010011，作为自然二进制数时，它相当于十进制数 ______，作为 8421BCD 码时，它相当于十进制数 ______。' },
  { id: 'fill_2', number: 2, type: QuestionType.FILL_BLANK, content: '三态门电路的输出有高电平、低电平和 ______ 3 种状态。' },
  { id: 'fill_3', number: 3, type: QuestionType.FILL_BLANK, content: 'TTL 与非门多余的输入端应接______。' },
  { id: 'fill_4', number: 4, type: QuestionType.FILL_BLANK, content: '如果对键盘上 108 个符号进行二进制编码，则至少要______位二进制数码。' },
  { id: 'fill_5', number: 5, type: QuestionType.FILL_BLANK, content: '74LS138 是 3 线—8 线译码器，译码为输出低电平有效，若输入为 \\A_2A_1A_0=110 时，输出 \\overline{Y_7}\\overline{Y_6}\\overline{Y_5}\\overline{Y_4}\\overline{Y_3}\\overline{Y_2}\\overline{Y_1}\\overline{Y_0} 应为______。' },
  { id: 'fill_6', number: 6, type: QuestionType.FILL_BLANK, content: '驱动共阳极七段数码管的译码器的输出电平为______有效。' },
  { id: 'fill_7', number: 7, type: QuestionType.FILL_BLANK, content: '逻辑函数有四种表示方法，它们分别是______、______、______和______。' },
  { id: 'fill_8', number: 8, type: QuestionType.FILL_BLANK, content: '将 2004 个“1”异或起来得到的结果是______。' },
  { id: 'fill_9', number: 9, type: QuestionType.FILL_BLANK, content: '由 555 定时器构成的三种电路中，______和______是脉冲的整形电路。' },
  { id: 'fill_10', number: 10, type: QuestionType.FILL_BLANK, content: 'TTL 器件输入脚悬空相当于输入______电平。' },
  { id: 'fill_11', number: 11, type: QuestionType.FILL_BLANK, content: '基本逻辑运算有：______、______和______运算。' },
  { id: 'fill_12', number: 12, type: QuestionType.FILL_BLANK, content: '触发器按动作特点可分为基本型、______、______和边沿型；' },
  { id: 'fill_13', number: 13, type: QuestionType.FILL_BLANK, content: '如果要把一宽脉冲变换为窄脉冲应采用______触发器' },
  { id: 'fill_14', number: 14, type: QuestionType.FILL_BLANK, content: '施密特触发器有______个稳定状态，多谐振荡器有______个稳定状态。' },
  { id: 'fill_15', number: 15, type: QuestionType.FILL_BLANK, content: '数字系统按组成方式可分为______、______两种；' },
  { id: 'fill_16', number: 16, type: QuestionType.FILL_BLANK, content: '两二进制数相加时，不考虑低位的进位信号是______加器。' },
  { id: 'fill_17', number: 17, type: QuestionType.FILL_BLANK, content: '不仅考虑两个______相加，而且还考虑来自______相加的运算电路，称为全加器。' },
  { id: 'fill_18', number: 18, type: QuestionType.FILL_BLANK, content: '时序逻辑电路的输出不仅和______有关，而且还与______有关。' },
  { id: 'fill_19', number: 19, type: QuestionType.FILL_BLANK, content: '计数器按 CP 脉冲的输入方式可分为______和______。' },
  { id: 'fill_20', number: 20, type: QuestionType.FILL_BLANK, content: '触发器根据逻辑功能的不同，可分为______、______、______、______、______等。' },
  { id: 'fill_21', number: 21, type: QuestionType.FILL_BLANK, content: '一个 JK 触发器有______个稳态，它可存储______位二进制数。' },
  { id: 'fill_22', number: 22, type: QuestionType.FILL_BLANK, content: '若将一个正弦波电压信号转换成同一频率的矩形波，应采用______电路。' },
  { id: 'fill_23', number: 23, type: QuestionType.FILL_BLANK, content: '把 JK 触发器改成 T 触发器的方法是______。' },
  { id: 'fill_24', number: 24, type: QuestionType.FILL_BLANK, content: 'N 个触发器组成的计数器最多可以组成______进制的计数器。' },
  { id: 'fill_25', number: 25, type: QuestionType.FILL_BLANK, content: '基本 RS 触发器的约束条件是______。' },
  { id: 'fill_26', number: 26, type: QuestionType.FILL_BLANK, content: '一般 A/D 转换过程要经过______、______、______、______四个步骤。' },
  { id: 'fill_27', number: 27, type: QuestionType.FILL_BLANK, content: 'D/A 转换器位数越多，其分辨率越______。' },
  { id: 'fill_28', number: 28, type: QuestionType.FILL_BLANK, content: '半导体存储器分为______和______两类。' },
  { id: 'fill_29', number: 29, type: QuestionType.FILL_BLANK, content: '一个 8 选 1 的数据选择器有______个数据输入端，______个地址输入端。' },
  { id: 'fill_30', number: 30, type: QuestionType.FILL_BLANK, content: '完成数制转换 \\(101011111)_2 = (____)_{16} = (____)_{8421BCD}, (3B)_{16} = (____)_{10} = (____)_{8421BCD}' },
  { id: 'fill_31', number: 31, type: QuestionType.FILL_BLANK, content: '在数字电路中三极管一般作为开关元件使用，即工作在______和______。' },
  { id: 'fill_32', number: 32, type: QuestionType.FILL_BLANK, content: '存储 8 位二进制信息，要______个触发器。' },
  { id: 'fill_33', number: 33, type: QuestionType.FILL_BLANK, content: 'JK 触发器特征方程为______。' },
  { id: 'fill_34', number: 34, type: QuestionType.FILL_BLANK, content: '常用的组合逻辑电路有______、______、______、______、______等。' },
  { id: 'fill_35', number: 35, type: QuestionType.FILL_BLANK, content: '对 16 个输入信号进行编码，至少需要______位二进制数码。' },
  { id: 'fill_36', number: 36, type: QuestionType.FILL_BLANK, content: '时序逻辑电路由______和______两大部分组成' },
  { id: 'fill_37', number: 37, type: QuestionType.FILL_BLANK, content: '时序逻辑电路常用的表示方法有逻辑方程式、状态表、______、时序图。' },
  { id: 'fill_38', number: 38, type: QuestionType.FILL_BLANK, content: '十进制计数器最高位输出的频率是输入 CP 脉冲频率的______倍。' },
  { id: 'fill_39', number: 39, type: QuestionType.FILL_BLANK, content: '数字信号只有______和______两种取值。' },
  { id: 'fill_40', number: 40, type: QuestionType.FILL_BLANK, content: '十进制 123 的二进制数是______；八进制数是______；十六进制数是______。' },
  { id: 'fill_41', number: 41, type: QuestionType.FILL_BLANK, content: 'BCD 七段翻译码器输入的是______位______码，输出有______个。' },
  { id: 'fill_42', number: 42, type: QuestionType.FILL_BLANK, content: '一个 N 进制计数器也可以称为______分频器。' },
  { id: 'fill_43', number: 43, type: QuestionType.FILL_BLANK, content: '设 ROM 容量为 256 字×8 位，则它应设置地址线______条，输出线______条。' },
  { id: 'fill_44', number: 44, type: QuestionType.FILL_BLANK, content: '用 256 字×4 位 RAM，扩展容量为 1024 字×8 位 RAM，则需要______片。' }
];

// 2. 答案库
const ANSWERS: Record<string, string[]> = {
  'fill_1': ['147', '93'],
  'fill_2': ['高阻'],
  'fill_3': ['高电平或悬空'],
  'fill_4': ['7'],
  'fill_5': ['10111111'],
  'fill_6': ['低'],
  'fill_7': ['真值表', '逻辑图', '逻辑表达式', '卡诺图'],
  'fill_8': ['0'],
  'fill_9': ['施密特触发器', '单稳态触发器'],
  'fill_10': ['高'],
  'fill_11': ['与', '或', '非'],
  'fill_12': ['同步型', '主从型'],
  'fill_13': ['积分型单稳态'],
  'fill_14': ['两', '0'],
  'fill_15': ['功能扩展电路', '功能综合电路'],
  'fill_16': ['半'],
  'fill_17': ['本位(低位)', '低位进位'],
  'fill_18': ['该时刻输入变量的取值', '该时刻电路所处的状态'],
  'fill_19': ['同步计数器', '异步计数器'],
  'fill_20': ['RS 触发器', 'T 触发器', 'JK 触发器', 'T\' 触发器', 'D 触发器'],
  'fill_21': ['两', '一'],
  'fill_22': ['多谐振荡器'],
  'fill_23': ['J=K=T'],
  'fill_24': ['\\2^N'],
  'fill_25': ['RS=0'],
  'fill_26': ['采样', '保持', '量化', '编码'],
  'fill_27': ['高'],
  'fill_28': ['读存贮器 (ROM)', '随机存贮器 (RAM)'],
  'fill_29': ['8', '3'],
  'fill_30': ['15F', '1101010001', '59', '1011001'],
  'fill_31': ['截止', '饱和'],
  'fill_32': ['8'],
  'fill_33': ['\\Q^{n+1}=J\\overline{Q}^n + \\overline{K}Q^n'],
  'fill_34': ['编码器', '译码器', '数据选择器', '数据分配器', '数值比较器'], // 及加法器等
  'fill_35': ['4'],
  'fill_36': ['组合器件(组合逻辑电路)', '存储器件(触发器)'],
  'fill_37': ['状态(转换)图'],
  'fill_38': ['1/10'],
  'fill_39': ['0', '1'],
  'fill_40': ['1111011', '173', '7B'],
  'fill_41': ['4', '二进制', '7'],
  'fill_42': ['N'],
  'fill_43': ['8', '8'],
  'fill_44': ['8']
};

// 3. 详细解析库
const EXPLANATIONS: Record<string, string> = {
  'fill_1': '10010011 (2) = 128+16+2+1 = 147 (10)。\n对于8421BCD，每4位代表一个十进制数，但 10010011 是 8 位，高4位1001=9，低4位0011=3，即 93。',
  'fill_5': '74LS138 是3-8译码器，低电平有效。输入 110 (6)，则 Y6 输出 0，其余为 1。输出排列为 Y7~Y0，即 10111111。',
  'fill_8': '异或运算：相同为0，不同为1。2004 个 1，偶数个 1 异或结果为 0。',
  'fill_43': '容量 = 字数 × 位数 = 256 × 8。字数 256 = \\2^8，故地址线 8 条。位数 8，故输出线 8 条。',
  'fill_44': '字扩展：1024/256 = 4 倍；位扩展：8/4 = 2 倍。总片数 = 4 × 2 = 8 片。'
};

// 4. 导出合并数据
export const FILL_QUESTIONS: Question[] = QUESTIONS_BASE.map(q => ({
  ...q,
  answer: ANSWERS[q.id] || [],
  explanation: EXPLANATIONS[q.id] || '暂无解析'
}));
