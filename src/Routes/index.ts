import { Express } from 'express';
import WebSiteListRoutes from './WebSiteListRoutes';
import WebSiteMonitoringRoutes from './WebSiteMonitoringRoutes';

const Routes = (server: Express) => {
    WebSiteListRoutes(server);
    WebSiteMonitoringRoutes(server);
}

export default Routes;