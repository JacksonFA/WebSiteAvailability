import { NextFunction, Request, Response } from 'express';
import { WebSiteMonitoringDocument } from '../Models/WebSiteMonitoringModel';
import WebSiteMonitoringService from '../Services/WebSiteMonitoringService';

const get = async (req: Request, res: Response, next: NextFunction) => {
    // Exibe o histórico de monitoramento de URLs
    const list = await WebSiteMonitoringService.read();
    res.status(200).json(list);
};

const getByUrl = async (req: Request, res: Response, next: NextFunction) => {
    const urlId = req.params.urlId;

    // Exibe o histórico de monitoramento de uma URL específica
    const result = await WebSiteMonitoringService.readOneUrl(urlId);

    res.status(200).json(result);
};

const deleteAll = async (req: Request, res: Response, next: NextFunction) => {
    // Apaga o histórico de monitoramento de URLs
    await WebSiteMonitoringService.deleteAll();
    res.status(200).json({ message: 'Histórico de monitoramento apagado com sucesso!' });
};

const WebSiteMonitoringController = {
    get,
    getByUrl,
    deleteAll,
};

export default WebSiteMonitoringController;