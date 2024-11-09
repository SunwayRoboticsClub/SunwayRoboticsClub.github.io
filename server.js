const { Client } = require('ssh2');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const sshClient = new Client();

const sshConnect = () => {
  sshClient.on('ready', () => {
    console.log('SSH Connection ready');
  }).connect({
    host: '192.168.1.100',  // Robot's IP address
    port: 22,
    username: 'pi',
    privateKey: require('fs').readFileSync('/Users/jung/.ssh/id_rsa')
});
};

// Endpoint to control robot movement
app.post('/control', (req, res) => {
  const command = req.body.command;  // e.g., "rosrun my_package my_node"

  sshClient.exec(command, (err, stream) => {
    if (err) {
      res.status(500).send('Error executing command');
      return;
    }
    stream.on('close', () => {
      res.send('Command executed successfully');
    });
    stream.on('data', (data) => {
      console.log(data.toString());
    });
  });
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
  sshConnect();  // Establish SSH connection on server startup
});
