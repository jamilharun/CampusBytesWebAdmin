import { createClient } from 'redis';

const client = createClient({
    password: import.meta.env.VITE_REDIS_PASSWORD,
    socket: {
        host: import.meta.env.VITE_REDIS_HOST,
        port: import.meta.env.VITE_REDIS_PORT
    }
}); 

// rClient.on('error', (er) => {console.log(er);});

if (!client.isOpen) {
    client.connect();
}
const rClient = client;

export default rClient;