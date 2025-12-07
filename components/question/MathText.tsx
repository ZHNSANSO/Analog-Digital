
import React, { useMemo } from 'react';

interface MathTextProps {
  content: string;
  className?: string;
}

// 符号映射表：覆盖希腊字母、数学符号、物理单位
const SYMBOL_MAP: Record<string, string> = {
  // 希腊字母
  'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'δ', 'Delta': 'Δ',
  'omega': 'ω', 'Omega': 'Ω', 'pi': 'π', 'mu': 'μ', 'phi': 'φ', 'theta': 'θ',
  'rho': 'ρ', 'lambda': 'λ', 'sigma': 'σ', 'tau': 'τ',
  // 运算符号
  'cdot': '·', 'times': '×', 'oplus': '⊕', 'rightarrow': '→', 'sum': '∑',
  'approx': '≈', 'ne': '≠', 'ge': '≥', 'le': '≤', 'pm': '±', 'infty': '∞',
  // 单位与其它
  'circ': '°', 'dots': '...', 'angle': '∠',
};

// 词法单元类型
type Token = 
  | { type: 'TEXT'; value: string }
  | { type: 'CMD'; value: string }
  | { type: 'ARG_START' } // {
  | { type: 'ARG_END' }   // }
  | { type: 'SUP' }       // ^
  | { type: 'SUB' };      // _

// 词法分析器
const tokenize = (text: string): Token[] => {
  const tokens: Token[] = [];
  let i = 0;
  
  while (i < text.length) {
    const char = text[i];
    
    if (char === '\\') {
      i++;
      let cmd = '';
      // 读取命令，例如 \frac, \beta
      while (i < text.length && /[a-zA-Z]/.test(text[i])) {
        cmd += text[i];
        i++;
      }
      // 处理单字符转义或符号，如 \, (空格), \| (竖线)
      if (cmd === '') {
         if (i < text.length) {
            cmd = text[i]; 
            i++;
         }
      }
      
      // 忽略 LaTeX 行内公式标记 \( \) 和 \[ \]
      if (cmd === '(' || cmd === ')' || cmd === '[' || cmd === ']') {
        continue;
      }
      tokens.push({ type: 'CMD', value: cmd });
    } else if (char === '{') {
      tokens.push({ type: 'ARG_START' });
      i++;
    } else if (char === '}') {
      tokens.push({ type: 'ARG_END' });
      i++;
    } else if (char === '^') {
      tokens.push({ type: 'SUP' });
      i++;
    } else if (char === '_') {
      tokens.push({ type: 'SUB' });
      i++;
    } else if (char === '$') {
      // 忽略 $ 分隔符
      i++;
    } else {
      // 普通文本
      let val = '';
      // 遇到特殊字符停止
      while (i < text.length && !['\\', '{', '}', '^', '_', '$'].includes(text[i])) {
        val += text[i];
        i++;
      }
      tokens.push({ type: 'TEXT', value: val });
    }
  }
  return tokens;
};

// 解析器状态
interface ParserState {
  tokens: Token[];
  pos: number;
}

// 递归解析
const parseTokens = (state: ParserState): string => {
  let html = '';
  
  while (state.pos < state.tokens.length) {
    const token = state.tokens[state.pos];
    
    if (token.type === 'ARG_END') {
      return html; // 结束当前层级（遇到 } 返回）
    }
    
    state.pos++;
    
    if (token.type === 'TEXT') {
      html += token.value;
    } else if (token.type === 'CMD') {
      if (SYMBOL_MAP[token.value]) {
        html += SYMBOL_MAP[token.value];
      } else if (token.value === 'frac') {
        const num = parseArgument(state);
        const denom = parseArgument(state);
        html += `<span class="math-fraction"><span class="math-num">${num}</span><span class="math-denom">${denom}</span></span>`;
      } else if (token.value === 'overline') {
        const content = parseArgument(state);
        html += `<span class="math-overline">${content}</span>`;
      } else if (token.value === 'text') {
          // \text{...} 保持原样
          html += parseArgument(state);
      } else {
        // 未知命令，尝试直接显示（去除反斜杠）
        // 对于 V_CC 这种，如果写成 V_{CC} 会被 SUB 处理，写成 V\_{CC} 这里的 CMD 是 _
        if (token.value === '_') { // 处理转义下划线 \_
             html += '_';
        } else {
             // 默认行为
             html += token.value; 
        }
      }
    } else if (token.type === 'SUP') {
      const content = parseNextTokenOrArg(state);
      html += `<sup>${content}</sup>`;
    } else if (token.type === 'SUB') {
      const content = parseNextTokenOrArg(state);
      html += `<sub>${content}</sub>`;
    } else if (token.type === 'ARG_START') {
      // { content } 直接包裹的内容
      const content = parseTokens(state);
      html += content;
      // parseTokens 会在遇到 ARG_END 时消耗掉它
    }
  }
  
  return html;
};

// 解析下一个参数（可能是 {} 包裹的，也可能是单个 token）
const parseArgument = (state: ParserState): string => {
  if (state.pos >= state.tokens.length) return '';
  
  const token = state.tokens[state.pos];
  if (token.type === 'ARG_START') {
    state.pos++; // 消耗 {
    return parseTokens(state); // 内部会消耗对应的 }
  } else {
    return parseNextTokenOrArg(state);
  }
};

// 解析下一个作为参数的单元
const parseNextTokenOrArg = (state: ParserState): string => {
  if (state.pos >= state.tokens.length) return '';
  const token = state.tokens[state.pos];
  
  if (token.type === 'ARG_START') {
    state.pos++;
    return parseTokens(state);
  } else if (token.type === 'TEXT') {
    state.pos++;
    return token.value;
  } else if (token.type === 'CMD') {
    state.pos++;
    return SYMBOL_MAP[token.value] || token.value;
  }
  return '';
};

export const MathText: React.FC<MathTextProps> = ({ content, className = '' }) => {
  const renderedHtml = useMemo(() => {
    if (!content) return '';
    // 预处理：处理高亮语法 **text**
    let processed = content.replace(/\*\*(.*?)\*\*/g, '<span class="highlight-text">$1</span>');
    
    // 替换常见的非 LaTeX 写法
    processed = processed.replace(/(\d+)\/(\d+)/g, '\\frac{$1}{$2}'); // 1/2 -> \frac{1}{2}
    
    // 解析 LaTeX
    const tokens = tokenize(processed);
    return parseTokens({ tokens, pos: 0 });
  }, [content]);

  return (
    <span 
      className={`inline-block leading-relaxed ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};
