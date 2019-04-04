"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const Calculator_po_1 = require("./Calculator-po");
let calculator = new Calculator_po_1.Calculator();
beforeEach(function () {
    protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
});
describe('Super Calculator ', () => {
    it('should add ', async () => {
        await calculator.calculate(1, 1, calculator.add);
        expect(await calculator.result.getText()).toEqual('2');
    });
    it('should substract ', async () => {
        await calculator.calculate(1, 1, calculator.substract);
        expect(await calculator.result.getText()).toEqual('0');
    });
    it('should divide ', async () => {
        await calculator.calculate(1, 1, calculator.divide);
        expect(await calculator.result.getText()).toEqual('1');
    });
    it('should multiply ', async () => {
        await calculator.calculate(1, 1, calculator.multiply);
        expect(await calculator.result.getText()).toEqual('1');
    });
    it('should modulus ', async () => {
        await calculator.calculate(1, 1, calculator.modulus);
        expect(await calculator.result.getText()).toEqual('0');
    });
});
