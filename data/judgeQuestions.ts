
import { Question, QuestionType } from '../types';

const QUESTIONS_BASE = [
  { id: 'j_1', number: 1, type: QuestionType.JUDGMENT, content: '逻辑变量的取值，1 比 0 大。' },
  { id: 'j_2', number: 2, type: QuestionType.JUDGMENT, content: 'D/A 转换器的位数越多，能够分辨的最小输出电压变化量就越小。' },
  { id: 'j_3', number: 3, type: QuestionType.JUDGMENT, content: '八路数据分配器的地址输入（选择控制）端有 8 个。' },
  { id: 'j_4', number: 4, type: QuestionType.JUDGMENT, content: '利用反馈归零法获得 N 进制计数器时，若为异步置零方式，则状态 SN 只是短暂的过渡状态，不能稳定而是立刻变为 0 状态。' },
  { id: 'j_5', number: 5, type: QuestionType.JUDGMENT, content: '在时间和幅度上都断续变化的信号是数字信号，语音信号不是数字信号。' },
  { id: 'j_6', number: 6, type: QuestionType.JUDGMENT, content: '约束项就是逻辑函数中不允许出现的变量取值组合，用卡诺图化简时，可将约束项当作 1，也可当作 0。' },
  { id: 'j_7', number: 7, type: QuestionType.JUDGMENT, content: '时序电路不含有记忆功能的器件。' },
  { id: 'j_8', number: 8, type: QuestionType.JUDGMENT, content: '计数器除了能对输入脉冲进行计数，还能作为分频器用。' },
  { id: 'j_9', number: 9, type: QuestionType.JUDGMENT, content: '优先编码器只对同时输入的信号中的优先级别最高的一个信号编码。' },
  { id: 'j_10', number: 10, type: QuestionType.JUDGMENT, content: '组合逻辑电路中产生竞争冒险的主要原因是输入信号受到尖峰干扰。' },
  { id: 'j_11', number: 11, type: QuestionType.JUDGMENT, content: '三态门的三种状态分别为：高电平、低电平、高不低的电压。' },
  { id: 'j_12', number: 12, type: QuestionType.JUDGMENT, content: 'TTL 与非门的多余输入端可以接固定高电平。' },
  { id: 'j_13', number: 13, type: QuestionType.JUDGMENT, content: 'CMOS 电路比 TTL 电路功耗大。' },
  { id: 'j_14', number: 14, type: QuestionType.JUDGMENT, content: '随机存储器 (RAM) 的存储内容能随时从指定地址写入或读出，但一旦断电所有存储数据立即丢失。' },
  { id: 'j_15', number: 15, type: QuestionType.JUDGMENT, content: '在 TTL 电路中通常规定高电平额定值为 5V。' },
  { id: 'j_16', number: 16, type: QuestionType.JUDGMENT, content: 'n 个变量的逻辑函数，其全部最小项共有 n 个。' },
  { id: 'j_17', number: 17, type: QuestionType.JUDGMENT, content: '与非门可以其反相器。' },
  { id: 'j_18', number: 18, type: QuestionType.JUDGMENT, content: '寄存器是组合逻辑器件。' },
  { id: 'j_19', number: 19, type: QuestionType.JUDGMENT, content: '寄存器要存放 n 位二进制数码时，需要 \\2^n 个触发器。' },
  { id: 'j_20', number: 20, type: QuestionType.JUDGMENT, content: '3 位二进制计数器可以构成模值为 \\2^3+1 的计数器。' },
  { id: 'j_21', number: 21, type: QuestionType.JUDGMENT, content: '十进制计数器最高位输出的周期是输入 CP 脉冲周期的 10 倍。' },
  { id: 'j_22', number: 22, type: QuestionType.JUDGMENT, content: 'JK 触发器在 CP 作用下，若 J=K=1，其状态保持不变。' },
  { id: 'j_23', number: 23, type: QuestionType.JUDGMENT, content: '要对 16 个输入信号进行编码，至少需要 4 位二进制码。' },
  { id: 'j_24', number: 24, type: QuestionType.JUDGMENT, content: '组合逻辑电路 t 时刻状态和 t-1 时刻该电路的状态有关。' },
  { id: 'j_25', number: 25, type: QuestionType.JUDGMENT, content: '一个容量为 256×4 位的 RAM 有 4 条数据线。' },
  { id: 'j_26', number: 26, type: QuestionType.JUDGMENT, content: '（题目内容同25题，原图重复，此处占位）' },
];

const ANSWERS: Record<string, string> = {
  'j_1': '错误', 'j_2': '正确', 'j_3': '错误', 'j_4': '正确',
  'j_5': '正确', 'j_6': '正确', 'j_7': '错误', 'j_8': '正确',
  'j_9': '正确', 'j_10': '错误', 'j_11': '错误', 'j_12': '正确',
  'j_13': '错误', 'j_14': '正确', 'j_15': '错误', 'j_16': '错误',
  'j_17': '正确', 'j_18': '错误', 'j_19': '错误', 'j_20': '错误',
  'j_21': '正确', 'j_22': '错误', 'j_23': '正确', 'j_24': '错误',
  'j_25': '正确', 'j_26': '正确',
};

const EXPLANATIONS: Record<string, string> = {
  'j_1': '逻辑值无大小之分。',
  'j_2': '位数越多，分辨率越高，LSB 越小。',
  'j_3': '8路分配器需要 \\log_2 8 = 3 个地址端。',
  'j_10': '主要是因为信号传输延迟时间不同。',
  'j_16': '共有 \\2^n 个最小项。',
  'j_22': 'J=K=1 时，状态翻转。',
};

export const JUDGE_QUESTIONS: Question[] = QUESTIONS_BASE.map(q => ({
  ...q,
  answer: ANSWERS[q.id] || '正确',
  explanation: EXPLANATIONS[q.id] || '暂无解析'
}));
