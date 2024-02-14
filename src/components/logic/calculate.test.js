import calculate from './calculate';

describe('Calculate possible errors', () => {
  test('testing deleting total and next', () => {
    const obj = {
      total: 5,
      next: '5',
      operation: null,
    };
    expect(calculate(obj, 'AC')).toStrictEqual({ next: null, operation: null, total: null });
  });

  test('should update next with the buttonName when it is a number', () => {
    const obj = {
      total: 5,
      next: '5',
      operation: '+',
    };
    expect(calculate(obj, '9')).toStrictEqual({ next: '59', operation: '+', total: 5 });
  });

  test('should update the number to the negative', () => {
    const obj = {
      total: '10',
      next: '52',
      operation: null,
    };
    expect(calculate(obj, '+/-')).toStrictEqual({ total: '10', next: '-52', operation: null });
  });
});
