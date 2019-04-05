"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JasmineConsoleReporter = require('jasmine-console-reporter');
const reporter = new JasmineConsoleReporter({
    colors: 1,
    cleanStack: 1,
    verbosity: 4,
    listStyle: 'indent',
    activity: false,
});
exports.config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['PageObject/Calculator-spec.js'],
    directConnect: true,
    //   seleniumAddress: 'http://localhost:4444/wd/hub',
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true,
    // setup console reporter
    onPrepare: function () {
        jasmine.getEnv().addReporter(reporter);
    }
};
