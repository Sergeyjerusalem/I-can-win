let Jasmine = require('jasmine');
let jasmine = new Jasmine;

(async () => {
  jasmine.loadConfigFile('spec/support/jasmine.json');
  jasmine.configureDefaultReporter({ showColors: true });
  jasmine.execute();


})();