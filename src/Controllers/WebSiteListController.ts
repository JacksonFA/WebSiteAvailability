import { NextFunction, Request, Response } from 'express';
import { WebSiteListDocument } from '../Models/WebSiteListModel';
import WebSiteListService from '../Services/WebSiteListService';

// interface para listagem de URLs que serão registradas
interface ListUrl{
    list: [
        { url: string }
    ]
};

const post = async (req: Request, res: Response, next: NextFunction) => {
    const { list } = req.body as ListUrl;

    // Percorre o array de URLs enviadas
    list.map(async ({ url }) => {
        const input: WebSiteListDocument = {
            url,
            createdAt: new Date,
            updatedAt: new Date
        };

        // cadastrar cada URL na base
        await WebSiteListService.createURLs(input);
    });

    res.status(201).json({
        message: 'URLs cadastras com sucesso',
        URLs: list
    });
};

const put = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const { url } = req.body;

    const input: WebSiteListDocument = {
        url,
        updatedAt: new Date
    };

    // Atualiza uma URL cadastrada
    const result = await WebSiteListService.updateURL(input, id);

    res.status(201).json({
        message: 'URL Atualizada!',
        result
    });
};

const del = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    
    // Apaga uma URL cadastrada
    await WebSiteListService.deleteURL(id);

    res.status(200).json({
        message: 'URL deletada com sucesso!'
    });
};

const get = async (req: Request, res: Response, next: NextFunction) => {
    // List todas as URLs cadastradas
    const list = await WebSiteListService.readURLs();

    res.status(200).json(list);
};

const getByUrl = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    // List infos de uma URL específica
    const result = await WebSiteListService.readURL(id);

    res.status(200).json(result);
};

const WebSiteListController = {
    post,
    put,
    del,
    get,
    getByUrl
};

export default WebSiteListController;