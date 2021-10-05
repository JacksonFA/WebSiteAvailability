import axios from 'axios';
import { DocumentDefinition } from 'mongoose';
import WebSiteMonitoring, { WebSiteMonitoringDocument } from '../Models/WebSiteMonitoringModel';
import WebSiteListService from './WebSiteListService';

const create = async () => {
    // Lista URLs que serão monitoradas
    const URLs = await WebSiteListService.readURLs();

    // Percorre o array de URLs
    URLs.map(async ({id, url}) => {
        const oldTime = new Date; // DateTime ao realizar requisição

        await axios.get(`${url}`).then(async response => {
            try {
                const newTime = new Date; // DateTime após realizar requisição

                // Tempo de resposta da requisição em milisegundos
                const responseTime = String(newTime.getTime() - oldTime.getTime()) + ' ms';
                
                // Registra na base o resultado da requisição à URL
                await WebSiteMonitoring.create({
                    urlId: id,
                    url,
                    statusCode: response.status,
                    status: response.statusText,
                    responseTime,
                    createdAt: new Date
                });
            } catch (error) {
                throw new Error(String(error));
            }
        })
    })
    
}

// Histórico dos status de todas as requisições
const read = async () => {
    try {
        return await WebSiteMonitoring.find();
    } catch (error) {
        throw new Error(String(error));
    }
}

// Histórico dos status de requisições à uma URL específica
const readOneUrl = async (urlId: string) => {
    try {
        return await WebSiteMonitoring.find({ urlId });
    } catch (error) {
        throw new Error(String(error));
    }
}

const WebSiteMonitoringService = {
    create,
    read,
    readOneUrl,
}

export default WebSiteMonitoringService;