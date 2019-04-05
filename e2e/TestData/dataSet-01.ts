import {Calculator} from '../PageObject/Calculator-po';
let calculator = new Calculator();

module.exports = {
    dataSet01: {
        'Multiplication':   {num1: 1, num2: 1, result: '1', operator: calculator.multiply},
        'Division':         {num1: 1, num2: 1, result: '1', operator: calculator.divide},
        'Addition':         {num1: 1, num2: 1, result: '2', operator: calculator.add},
        'Substraction':     {num1: 1, num2: 1, result: '0', operator: calculator.substract},
        'Modulus':          {num1: 1, num2: 1, result: '0', operator: calculator.modulus}
    }
}