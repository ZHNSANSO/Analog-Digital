
import { Question } from './types';
import { FILL_QUESTIONS } from './data/fillQuestions';
import { CHOICE_QUESTIONS } from './data/choiceQuestions';
import { JUDGE_QUESTIONS } from './data/judgeQuestions';
import { SIMPLIFY_QUESTIONS } from './data/simplifyQuestions';
import { ANALYSIS_QUESTIONS } from './data/analysisQuestions';
import { DESIGN_QUESTIONS } from './data/designQuestions';

import { ANALOG_FILL_QUESTIONS } from './data/analogFill';
import { ANALOG_CHOICE_QUESTIONS } from './data/analogChoice';
import { ANALOG_JUDGE_QUESTIONS } from './data/analogJudge';
import { ANALOG_COMPLEX_QUESTIONS } from './data/analogComplex';

import { DIGITAL_PAPER_QUESTIONS_B } from './data/digitalPaperFree';

// 1. Digital Bank (Original)
const digitalBankRaw = [
  ...FILL_QUESTIONS,
  ...CHOICE_QUESTIONS,
  ...JUDGE_QUESTIONS,
  ...SIMPLIFY_QUESTIONS,
  ...ANALYSIS_QUESTIONS,
  ...DESIGN_QUESTIONS
];
const digitalBank = digitalBankRaw.map(q => ({ ...q, paper: 'digital_bank' as const }));

// 2. Analog Bank
const analogBankRaw = [
  ...ANALOG_FILL_QUESTIONS,
  ...ANALOG_CHOICE_QUESTIONS,
  ...ANALOG_JUDGE_QUESTIONS,
  ...ANALOG_COMPLEX_QUESTIONS
];
const analogBank = analogBankRaw.map(q => ({ ...q, paper: 'analog_bank' as const }));

// 3. Digital Paper (Free)
// Set A: Clone of Digital Bank
const digitalPaperA = digitalBankRaw.map(q => ({
  ...q,
  id: q.id + '_paperA', // Avoid ID collision
  paper: 'digital_paper' as const,
  paperSet: 'A' as const
}));

// Set B: New questions
// (Already tagged in file)
const digitalPaperB = DIGITAL_PAPER_QUESTIONS_B;

export const QUESTIONS: Question[] = [
  ...digitalBank,
  ...analogBank,
  ...digitalPaperA,
  ...digitalPaperB
];
