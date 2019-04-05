import {Config} from 'protractor';
const JasmineConsoleReporter = require('jasmine-console-reporter');

const reporter = new JasmineConsoleReporter({
  colors: 1,           // (0|false)|(1|true)|2
  cleanStack: 1,       // (0|false)|(1|true)|2|3
  verbosity: 4,        // (0|false)|1|2|(3|true)|4|Object
  listStyle: 'indent', // "flat"|"indent"
  activity: false,     // boolean or string ("dots"|"star"|"flip"|"bouncingBar"|...)
});

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  specs: [ 'PageObject/Calculator-spec.js' ],
  directConnect: true,
//   seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.

  noGlobals: true,

  // setup console reporter
  onPrepare: function(){
    jasmine.getEnv().addReporter(reporter);
  }
};