const {
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    subtract
} = require('./functions')

test('returnTwo should equal 2', () => {
    expect(returnTwo()).toBe(2)
})

test('return greeting to be Hello, James.', () => {
    expect(greeting('James')).toBe("Hello, James.")
    expect(greeting('Jill')).toEqual("Hello, Jill.")
})

describe('Math functions', () => {
    test('return add to be 3, and 14', () => {
        expect(add(1, 2)).toBe(3)
        expect(add(5, 9)).toBe(14)
    })
    
    test('return multiply to be 2, and 10', () => {
        expect(multiply(1, 2)).toBe(2)
        expect(multiply(5, 2)).toBe(10)
    })
    
    test('return divide to be 2, and 3', () => {
        expect(divide(2, 1)).toBe(2)
        expect(divide(9, 3)).toBe(3)
    })
    test('return subtract to be 1, and 4', () => {
        expect(subtract(2, 1)).toBe(1)
        expect(subtract(9, 5)).toBe(4)
    })
})