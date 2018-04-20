export const fizzbuzz = (value) => {
  if (value === 1) return value.toString();
  if (value % 3 === 0 && value % 5 !== 0) return 'Fizz';
  if (value % 3 !== 0 && value % 5 === 0) return 'Buzz';
  if (value % 3 === 0 && value % 5 === 0) return 'Fizzbuzz';
};
