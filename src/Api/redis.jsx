import { createClient } from 'redis';

const rClient = createClient({
    password: import.meta.env.VITE_REDIS_PASSWORD,
    socket: {
        host: import.meta.env.VITE_REDIS_HOST,
        port: import.meta.env.VITE_REDIS_PORT
    }
}); 

rClient.on('connect', (con) => {console.log(con);});

if (!rClient.isOpen) {
    rClient.connect();
}

export { rClient };