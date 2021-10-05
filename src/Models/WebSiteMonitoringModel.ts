import mongoose from 'mongoose';

export interface WebSiteMonitoringDocument {
    urlId: string;
    url: string;
    statusCode: number;
    status: string;
    responseTime: string;
    createdAt: Date;
}

const WebSiteMonitoringSchema = new mongoose.Schema(
    {
        urlId: { type: String, required: true },
        url: { type: String, required: true },
        statusCode: { type: Number, required: true },
        status: { type: String, required: true },
        responseTime: { type: String, required: true }
    },
    { timestamps: true }
);

const WebSiteMonitoring = mongoose.model<WebSiteMonitoringDocument>('WebSite-Monitoring', WebSiteMonitoringSchema);

export default WebSiteMonitoring;