/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
 const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // on any input from stdin (standard input), output a "." to stdout

  process.stdin.on('data', handleUserInput);
  return stdin;
};
const handleUserInput = (key) => {
  if (key === '\u0003') { // \u0003 maps to ctrl+c input
    process.exit();
  }
};

module.exports = { setupInput }