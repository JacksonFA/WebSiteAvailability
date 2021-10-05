import { Express } from 'express';
import WebSiteListController from '../Controllers/WebSiteListController';

// Rotas disponíveis para listagem de URLs
const WebSiteListRoutes = (server: Express) => {
    server.post('/website-list', WebSiteListController.post);
    server.put('/website-list/:id', WebSiteListController.put);
    server.delete('/website-list/:id', WebSiteListController.del);
    server.get('/website-list', WebSiteListController.get);
    server.get('/website-list/:id', WebSiteListController.getByUrl);
};

export default WebSiteListRoutes;