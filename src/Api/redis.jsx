import { createClient } from 'redis';

const client = createClient({
    password: import.meta.env.VITE_REDIS_PASSWORD,
    socket: {
        host: import.meta.env.VITE_REDIS_HOST,
        port: import.meta.env.VITE_REDIS_PORT
    }
}); 

client.on('connect', (con) => {console.log(con);});

if (!client.isOpen) {
    client.connect();
}

export { client };