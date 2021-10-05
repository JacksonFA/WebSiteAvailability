import { DocumentDefinition } from 'mongoose';
import WebSiteList, { WebSiteListDocument } from '../Models/WebSiteListModel';

// CRUD de listagem de URLs
const createURLs = async (input: DocumentDefinition<WebSiteListDocument>) => {
    try {
        return await WebSiteList.create(input);
    } catch (error) {
        throw new Error(String(error));
    }
}

const updateURL = async (input: DocumentDefinition<WebSiteListDocument>, id: string) => {
    try {
        await WebSiteList.updateOne({ _id: id }, input);
        return await WebSiteList.findOne({ _id: id });
    } catch (error) {
        throw new Error(String(error));
    }
}

const deleteURL = async (id: string) => {
    try {
        return await WebSiteList.deleteOne({ _id: id });
    } catch (error) {
        throw new Error(String(error));
    }
}

const readURLs = async () => {
    try {
        return await WebSiteList.find();
    } catch (error) {
        throw new Error(String(error));
    }
}

const readURL = async (id: string) => {
    try {
        return await WebSiteList.findOne({ _id: id });
    } catch (error) {
        throw new Error(String(error));
    }
}

const WebSiteListService = {
    createURLs,
    updateURL,
    deleteURL,
    readURLs,
    readURL,
}

export default WebSiteListService;