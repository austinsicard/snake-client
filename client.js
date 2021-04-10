const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  // Handle message from server
  conn.on('data', (data) => {
    console.log('Server says: ', data); 
  });
  // Print a message to the clients screen on connection
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: A10");
    // conn.write("Move: up");
    // setInterval(() => conn.write('Move: up'), 100);
// setTimeout(() => conn.write('Move: up'), 1000);
// setTimeout(() => conn.write('Move: right'), 1050);
// setTimeout(() => conn.write('Move: up'), 1100);
// setTimeout(() => conn.write('Move: right'), 1150);
  });


  return conn;
}

module.exports = { connect };