
import {browser} from 'protractor';
import {Calculator} from './Calculator-po';

let calculator = new Calculator();
beforeEach(function (){
    browser.get('http://juliemr.github.io/protractor-demo/');
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
