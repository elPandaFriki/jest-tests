import { fizzbuzz } from "../src";

describe('Index', () => {
  test('Debe devolver un Number como un String', () => {
    expect(fizzbuzz(1)).toBe('1');
  });

  test('Debería return Fizz si number es divisible por 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
    expect(fizzbuzz(4)).not.toBe('Fizz');
  });

  test('Debería return Buzz si number es divisible por 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
    expect(fizzbuzz(6)).not.toBe('Buzz');
  });

  test('Debería return Fizzbuzz si number es divisible por 5 y por 3', () => {
    expect(fizzbuzz(15)).toBe('Fizzbuzz');
    expect(fizzbuzz(16)).not.toBe('Fizzbuzz');
  });
});


/*
test('Este es un test', () => {
  //
});

test('Este es un test con promise', (done) => {
  done();
});

test.skip('Me salto este test', () => {
  //
});

describe('Esto es un conjunto de tests', () => {
  beforeAll();
  test('Este es un test', () => {
    expect(2 + 3).toBe(5);
  });
  test('Este es otro test', () => {
    // expect(2 > 3).toBe(false);
    expect(2 > 3).toBeFalsy();
  });
  describe('Este es un subconjunto de tests', () => {
    test('Este es un test', () => {
      beforeEach();
      //
    });
  });
});
*/

// describe('FizzBuzz', (number) => {
//   test('Divisible 3', (number) => {
//     expect(number % 5).toBe(0);
//   });

//   test('Divisible 5', (number) => {
//     expect(number % 5).toBe(0);
//   });
// });
