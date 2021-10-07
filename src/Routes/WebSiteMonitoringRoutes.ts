import { Express } from 'express';
import WebSiteMonitoringController from '../Controllers/WebSiteMonitoringController';

// Rotas disponíveis para Monitoramento de URLs
const WebSiteMonitoringRoutes = (server: Express) => {
    server.get('/website-Monitoring', WebSiteMonitoringController.get);
    server.get('/website-Monitoring/:urlId', WebSiteMonitoringController.getByUrl);
    server.delete('/website-Monitoring/', WebSiteMonitoringController.deleteAll);
};

export default WebSiteMonitoringRoutes;