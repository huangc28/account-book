import curry from './curry'

describe('javascript curry behavior', () => {
  test('curry a sum function', () => {
    // b is being passed in by sum(3)
    const a = (a, b) => a + b

    const sum = curry(a)(2)

    const res = sum(3)

    expect(res).toBe(5)
  })

  test('curry a string function to have concatenate result', () => {
    const strConcat = (str1, str2) => `hello ${str1}, ${str2}`

    const bryanConcat = curry(strConcat)('Bryan')

    const res = bryanConcat('Huang')

    expect(res).toBe('hello Bryan, Huang')
  })
})