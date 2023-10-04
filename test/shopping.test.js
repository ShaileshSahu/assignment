const fs = require('fs');
const main = require('../main')
const expect = require('chai').expect;

describe(`Test cases for Shopping Cart Problem`, () => {

    it('should give the correct output for input1.txt', () => {
        const filename = 'sample_input/input1.txt';
        const finalResult = main.getFinalResult(filename);
        expect(finalResult).to.equal(42985);
    })

    it('should give the correct output for input2.txt', () => {
        const filename = 'sample_input/input2.txt';
        const finalResult = main.getFinalResult(filename);
        expect(finalResult).to.equal(30365);
    })

    it('should give the correct output for input3.txt', () => {
        const filename = 'sample_input/input3.txt';
        const finalResult = main.getFinalResult(filename);
        expect(finalResult).to.equal(14475);
    })

    it('should give the correct output for input4.txt', () => {
        const filename = 'sample_input/input4.txt';
        const finalResult = main.getFinalResult(filename);
        expect(finalResult).to.equal(0);
    })

    it('should give the correct output for input5.txt', () => {
        const filename = 'sample_input/input5.txt';
        const finalResult = main.getFinalResult(filename);
        expect(finalResult).to.equal(32360);
    })
})