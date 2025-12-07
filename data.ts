
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

const tagDigital = (q: Question): Question => ({ ...q, paper: 'digital' });
const tagAnalog = (q: Question): Question => ({ ...q, paper: 'analog' });

export const QUESTIONS: Question[] = [
  // Digital Electronics
  ...FILL_QUESTIONS.map(tagDigital),
  ...CHOICE_QUESTIONS.map(tagDigital),
  ...JUDGE_QUESTIONS.map(tagDigital),
  ...SIMPLIFY_QUESTIONS.map(tagDigital),
  ...ANALYSIS_QUESTIONS.map(tagDigital),
  ...DESIGN_QUESTIONS.map(tagDigital),

  // Analog Electronics
  ...ANALOG_FILL_QUESTIONS.map(tagAnalog),
  ...ANALOG_CHOICE_QUESTIONS.map(tagAnalog),
  ...ANALOG_JUDGE_QUESTIONS.map(tagAnalog),
  ...ANALOG_COMPLEX_QUESTIONS.map(tagAnalog),
];
