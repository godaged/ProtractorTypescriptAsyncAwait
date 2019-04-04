"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Calculator {
    constructor() {
        this.firstNumber = protractor_1.element(protractor_1.by.css('input[ng-model="first"]'));
        this.secondNumber = protractor_1.element(protractor_1.by.css('input[ng-model="second"]'));
        this.operatorDDL = protractor_1.element(protractor_1.by.css('select[ng-model="operator"]'));
        this.add = protractor_1.element(protractor_1.by.css('option[value="ADDITION"]'));
        this.divide = protractor_1.element(protractor_1.by.css('option[value="DIVISION"]'));
        this.modulus = protractor_1.element(protractor_1.by.css('option[value="MODULO"]'));
        this.multiply = protractor_1.element(protractor_1.by.css('option[value="MULTIPLICATION"]'));
        this.substract = protractor_1.element(protractor_1.by.css('option[value="SUBTRACTION"]'));
        this.goButton = protractor_1.element(protractor_1.by.id('gobutton'));
        this.result = protractor_1.element(protractor_1.by.css('h2[class="ng-binding"]'));
    }
    async calculate(firstNum, secondNum, Operator) {
        await this.firstNumber.sendKeys(firstNum);
        await this.operatorDDL.click();
        await Operator.click();
        await this.secondNumber.sendKeys(secondNum);
        await this.goButton.click();
    }
    ;
}
exports.Calculator = Calculator;
