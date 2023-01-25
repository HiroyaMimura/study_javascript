var agent = window.navigator.userAgent.toLowerCase();
// ...中略...
var chrome = (agent.indexOf('chrome') > -1) && (agent.indexOf('edge') === -1) && (agent.indexOf('opr') === -1);
console.log('Chrome:' + chrome);