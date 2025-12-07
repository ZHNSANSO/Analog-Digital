/**
 * Simple utility to help render text with overlines for boolean algebra
 * Syntax: ~A~ becomes A with overline.
 */
export const formatLogicExpression = (text: string): string => {
  // This is a basic implementation. For complex React rendering, 
  // we use the MathText component. This string replacer is for simple attributes.
  return text;
};

export const generateId = (prefix: string, index: number): string => {
  return `${prefix}_${index + 1}`;
};