// Stores the active TCP connection object.
let connection;
/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
 const setupInput = function(conn) {
  connection = conn;
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
  if (key === 'w') { 
    connection.write("Move: up");
  }
  if (key === 's') { 
    connection.write('Move: down');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 'd') { 
    connection.write('Move: right');
  }
  if (key === 'z') {
    setTimeout(() => connection.write("Say: zZz"), 1000); //Sends message after 1 second has passed
  }
  if (key === 'f') {
    connection.write('Say: <><');
  }
  if (key === 'l') {
    connection.write('Say" L0L');
  }
};

module.exports = { setupInput }