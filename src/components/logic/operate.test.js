import operate from './operate';

describe('operate', () => {
  test('should add two numbers', () => {
    expect(operate('1', '2', '+')).toBe('3');
  });

  test('should subtract two numbers', () => {
    expect(operate('5', '3', '-')).toBe('2');
  });

  test('should multiply two numbers', () => {
    expect(operate('4', '2', 'x')).toBe('8');
  });

  test('should divide two numbers', () => {
    expect(operate('6', '3', '÷')).toBe('2');
  });

  test('should handle division by zero', () => {
    expect(operate('8', '0', '÷')).toBe("Can't divide by 0.");
  });

  test('should find modulo of two numbers', () => {
    expect(operate('5', '3', '%')).toBe('2');
  });

  test('should handle modulo with divisor zero', () => {
    expect(operate('8', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  test('should throw error for unknown operation', () => {
    expect(() => operate('1', '2', '')).toThrow("Unknown operation ''");
  });
});
