
import {element, by, ElementFinder} from 'protractor';
export class Calculator {
    firstNumber     = element(by.css('input[ng-model="first"]'));
    secondNumber    = element(by.css('input[ng-model="second"]'));
    operatorDDL     = element(by.css('select[ng-model="operator"]'));
    add             = element(by.css('option[value="ADDITION"]'));
    divide          = element(by.css('option[value="DIVISION"]'));
    modulus         = element(by.css('option[value="MODULO"]'));
    multiply        = element(by.css('option[value="MULTIPLICATION"]'));
    substract       = element(by.css('option[value="SUBTRACTION"]'));
    goButton        = element(by.id ('gobutton'));
    result          = element(by.css('h2[class="ng-binding"]'));

    async calculate(firstNum: number, secondNum: number , Operator: ElementFinder) {
        await this.firstNumber.sendKeys(firstNum);
        await this.operatorDDL.click();
        await Operator.click();
        await this.secondNumber.sendKeys(secondNum);
        await this.goButton.click();
    };
}