"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const Calculator_po_1 = require("./Calculator-po");
let using = require('jasmine-data-provider');
let testData = require('../TestData/dataSet-01');
let firstNum = 1;
let secondNum = 1;
let resultAdd = 2;
let resultMult = 1;
let resultSubs = 0;
let resultDivi = 1;
let resultModu = 0;
let calculator = new Calculator_po_1.Calculator();
beforeEach(function () {
    protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
});
describe('Super Calculator ', () => {
    it('should add ', async () => {
        await calculator.calculate(firstNum, secondNum, calculator.add);
        expect(await calculator.result.getText()).toEqual(resultAdd.toString());
    });
    it('should substract ', async () => {
        await calculator.calculate(firstNum, secondNum, calculator.substract);
        expect(await calculator.result.getText()).toEqual(resultSubs.toString());
    });
    it('should divide ', async () => {
        await calculator.calculate(firstNum, secondNum, calculator.divide);
        expect(await calculator.result.getText()).toEqual(resultDivi.toString());
    });
    it('should multiply ', async () => {
        await calculator.calculate(firstNum, secondNum, calculator.multiply);
        expect(await calculator.result.getText()).toEqual(resultMult.toString());
    });
    it('should modulus ', async () => {
        await calculator.calculate(firstNum, secondNum, calculator.modulus);
        expect(await calculator.result.getText()).toEqual(resultModu.toString());
    });
});
//using external test data
describe('Super Calculator with external test data', () => {
    using(testData.dataSet01, function (data, description) {
        it('should have ' + description, async () => {
            await calculator.calculate(data.num1, data.num2, data.operator);
            expect(await calculator.result.getText()).toEqual(data.result);
        });
    });
});
