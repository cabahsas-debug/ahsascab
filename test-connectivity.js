const tls = require('tls');
const dns = require('dns');
const net = require('net');

const CLUSTER_DOMAIN = 'cluster0.vw55qt0.mongodb.net';

console.log(`Resolving SRV for _mongodb._tcp.${CLUSTER_DOMAIN}...`);

dns.resolveSrv(`_mongodb._tcp.${CLUSTER_DOMAIN}`, (err, addresses) => {
    if (err) {
        console.error('❌ DNS Resolution Failed:', err.message);
        console.log('Trying fallback shard names...');
        checkShard('cluster0-shard-00-00.vw55qt0.mongodb.net');
        return;
    }

    console.log('✅ Found shards:', addresses);
    if (addresses.length > 0) {
        checkShard(addresses[0].name, addresses[0].port);
    }
});

function checkShard(host, port = 27017) {
    console.log(`\nTesting TCP connection to ${host}:${port}...`);

    const socket = new net.Socket();
    socket.setTimeout(5000);

    socket.connect(port, host, () => {
        console.log('✅ TCP Connection Established! (Network is reachable)');
        socket.destroy();
        checkSSL(host, port);
    });

    socket.on('error', (err) => {
        console.error(`❌ TCP Connection Failed: ${err.message}`);
        console.log('--> This indicates a Firewall or Proxy blocking port 27017.');
    });

    socket.on('timeout', () => {
        console.error('❌ TCP Connection Timed Out');
        console.log('--> This indicates a strict Firewall dropping packets.');
        socket.destroy();
    });
}

function checkSSL(host, port) {
    console.log(`\nTesting SSL Handshake to ${host}:${port}...`);

    const socket = tls.connect({
        host: host,
        port: port,
        servername: host, // SNI
        timeout: 5000
    }, () => {
        console.log('✅ SSL Handshake Successful!');
        console.log('--> Your connection is secure and accepted.');
        socket.end();
    });

    socket.on('error', (err) => {
        console.error(`❌ SSL Handshake Failed: ${err.message}`);
        if (err.message.includes('alert number 80') || err.message.includes('internal error')) {
            console.log('--> 🚨 THIS CONFIRMS IP WHITELIST ISSUE.');
            console.log('--> MongoDB Server rejected the connection handshake.');
        }
    });
}
