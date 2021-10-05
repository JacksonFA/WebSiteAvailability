import express from 'express';
import cors from 'cors';
import config from './Config/default';
import Connect from './db/Connect';
import Routes from "./Routes";
import monitoring from './Services/WebSiteMonitoringService';

// Configs
const port = config.port as number;
const host = config.host as string;
const server = express();

// Middlewares:
server.use(cors());
server.use(express.json());

// Start server:
server.listen(port, host, () => {
    console.log(`Server listening at: http://${host}:${port}`);

    // BD Connection
    Connect();

    // Redirect to routes 
    Routes(server);

    // Sets monitoring URLs periodically
    setInterval(monitoring.create, 10000);
});
